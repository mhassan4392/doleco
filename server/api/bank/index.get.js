import prisma from "~/server/db";

export default defineEventHandler(async (event) => {
  try {
    const { user } = await isAuthenticated(event);
    const { card } = await prisma.user.findUnique({
      where: {
        phone: user.phone,
      },
      include: {
        card: true,
      },
    });
    console.log(card);
    return { card };
  } catch (e) {
    return createError({ statusCode: e.code, statusMessage: e.message });
  }
});
