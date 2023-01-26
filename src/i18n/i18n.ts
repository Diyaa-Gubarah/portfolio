import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: require("./en.json")
    },
    ar: {
        translation: require("./ar.json")
    },
    plurals: require('./en.json')

};

i18n.use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        fallbackLng: 'en',
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
    });



export default i18n;
