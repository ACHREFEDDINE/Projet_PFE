import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      main: "Main",
      annonceur: "Advertiser",
      chercheur: "Searcher",
      dashboard: "Dashboard",
      ads: "Ads",
      notification: "Notification",
      setting: "Setting",
      profile: "Profile",
      logout: "Logout",
      between: "between",
      and: "and",
      "Progress from the last month": "Progress from the last month",
    },
  },
  fr: {
    translation: {
      main: "Princiale",
      annonceur: "Annonceur",
      chercheur: "Chercheur",
      dashboard: "Tableau de board",
      ads: "Publications",
      notification: "Notification",
      setting: "Paramètre",
      profile: "Profil",
      logout: "Déconnecter",
      between: "entre",
      and: "et",
      "Progress from the last month": "Progrès depuis le mois dernier",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
