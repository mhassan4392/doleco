import captcha from "nodejs-captcha";
export default defineEventHandler((event) => {
  const c = captcha();
  const code = c.image;
  const value = c.value;
  event.context.session.validCode = value;
  return {
    code,
    sessionId: event.context.session.id,
  };
});
