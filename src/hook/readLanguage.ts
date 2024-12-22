//-Path: "langtext/src/hook/readLanguage.ts"
import isLang from "../function/isLang";
import { LangjsonType, Language, Resources } from "../types/type";
import { getStorageSetting, setStorageSetting } from "../function/storage";

export default function readLanguage(
    Langjson: LangjsonType,
    data: Resources,
    lang?: Language,
): Resources {
    const getLang = getStorageSetting();

    if (getLang === undefined) {
        if (window?.navigator?.language !== undefined) {
            const newLang = isLang(
                Langjson.languages,
                window.navigator.language,
            );
            setStorageSetting(newLang);
        }
    }

    if (lang === undefined) lang = getStorageSetting();

    const responseLang: Resources = {};
    const langText = lang as Language;
    for (const key in data) {
        const value = data[key] as Resources;
        if (value?.en && !value[langText]) {
            responseLang[key] =
                Langjson.errorlangtext[langText] ?? Langjson.errorlangtext.en;
        } else {
            if (value?.[langText]) {
                responseLang[key] = value[langText];
            } else {
                if (typeof value === "object") {
                    responseLang[key] = readLanguage(Langjson, value, lang);
                } else {
                    responseLang[key] = value;
                }
            }
        }
    }
    return responseLang;
}
