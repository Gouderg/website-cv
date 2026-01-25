export const translations = {
  fr: {
    home: "Accueil",
    contact: "Contact",
    welcome: "Bienvenue sur mon site",
    description: "Ceci est un composant bilingue."
  },
  en: {
    home: "Home",
    contact: "Contact",
    welcome: "Welcome to my website",
    description: "This is a bilingual component."
  }
};

export type Language = 'fr' | 'en';
export type TranslationKeys = keyof typeof translations.fr;