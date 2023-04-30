import captcha from "nodejs-captcha";
import prisma from "~/server/db";
import { addSeconds } from "date-fns";
export default defineEventHandler(async (event) => {
  let user = null;
  try {
    // get body from request
    const data = await readBody(event);

    const { phone } = data.body;

    const c = captcha();
    const value = c.value;
    // const time = new Date(Date.now() + addSeconds(20)).toString();
    const time = addSeconds(Date.now(), 60).toString();
    console.log(time);
    event.context.session.otp = {
      value,
      phone,
      expireTime: time,
    };

    setTimeout(() => {
      event.context.session.otp = {};
    }, 20000);

    return { otp: value, sessionId: event.context.session.id };
  } catch (e) {
    return createError({ statusCode: e.code, statusMessage: e.message });
  }
});
