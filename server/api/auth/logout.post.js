export default defineEventHandler(async (event) => {
  const session = event.context.session;
  try {
    session.user = null;

    return {};
  } catch (e) {
    return createError({ statusCode: e.code, statusMessage: e.message });
  }
});
