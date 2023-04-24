import en from "./en/en";
export default defineI18nConfig((nuxt) => ({
  locale: "en",
  legacy: false,
  messages: {
    en,
  },
}));
