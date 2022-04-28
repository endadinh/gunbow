import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "./translation/en.json";
import common_vi from "./translation/vi.json";
import common_cn from "./translation/cn.json";

const resources = { 
    en: { 
        translation: common_en
    },
    vi: { 
        translation: common_vi
    },
    cn: { 
        translation: common_cn
    }
}


i18n
.use(initReactI18next)
.init({
    resources,
    lng: 'en',
    keySeparator: false,
    returnObjects: true,
    interpolation: { 
        escapeValue: false
    }
});

export default i18n;