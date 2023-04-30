import bcrypt from "bcryptjs";
import prisma from "~/server/db";
export default defineEventHandler(async (event) => {
  const session = event.context.session;
  let user = null;
  try {
    // get body
    const data = await readBody(event);
    const { password, phone, sessionId, otp } = data.body;
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
        },
      });
    }

    return {};
  } catch (e) {
    return createError({ statusCode: e.code, statusMessage: e.message });
  }
});
