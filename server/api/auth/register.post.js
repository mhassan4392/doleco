import bcrypt from "bcryptjs";
import prisma from "~/server/db";
import captcha from "nodejs-captcha";
export default defineEventHandler(async (event) => {
  const session = event.context.session;
  let user = null;
  const c = captcha();
  try {
    // get body
    const data = await readBody(event);
    const { password, phone, sessionId, otp, invitation } = data.body;
    // find user
    user = await prisma.user.findUnique({
      where: {
        phone,
      },
    });

    if (user) {
      return createError({
        statusCode: 401,
        statusMessage: "user already exist",
      });
    }

    const users = await prisma.user.count();
    let invitationUser;
    if (users != 0) {
      invitationUser = await prisma.user.findUnique({
        where: {
          code: invitation,
        },
      });

      if (!invitationUser) {
        return createError({
          statusCode: 401,
          statusMessage: "invitation link is incorrect",
        });
      }
    }

    // compare session
    if (
      session.id != sessionId ||
      session?.otp.value != otp ||
      session?.otp.phone != phone ||
      session?.otp.time >= new Date(Date.now()).toString()
    ) {
      return createError({
        statusCode: 401,
        statusMessage: "phone verification failed",
      });
    }

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      user = await prisma.user.create({
        data: {
          phone,
          password: hash,
          code: c.value,
          invitationId: invitationUser ? invitationUser.id : null,
        },
      });
    }

    return {};
  } catch (e) {
    console.log(e);
    return createError({ statusCode: e.code, statusMessage: e.message });
  }
});
