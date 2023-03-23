import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from './trans_en.json';
import ru from './trans_ru.json';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: JSON.parse(localStorage.getItem('language')),
    fallbackLng: 'en',
  });

export default i18n;
