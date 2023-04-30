import captcha from "nodejs-captcha";
import prisma from "~/server/db";
export default defineEventHandler(async (event) => {
  const session = event.context.session;
  let user = null;
  try {
    // get body from request
    const data = await readBody(event);

    const { code, phone, sessionId } = data.body;

    // find user
    user = await prisma.user.findUnique({
      where: {
        phone,
      },
    });
    if (!user) {
      return createError({ statusCode: 401, statusMessage: "user not found" });
    }
    // compare session
    if (session.id != sessionId) {
      return createError({ statusCode: 401, statusMessage: "session expired" });
    }

    // check optp
    if (session.optp.phone != phone) {
      return createError({
        statusCode: 401,
        statusMessage: "wrong phone number",
      });
    }

    // check optp
    if (session.optp.value != code) {
      return createError({
        statusCode: 401,
        statusMessage: "wrong code",
      });
    }

    return {};
  } catch (e) {
    return createError({ statusCode: e.code, statusMessage: e.message });
  }
});
