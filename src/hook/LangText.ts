//-Path: "langtext/src/hook/LangText.ts"
import {
    Options,
    Language,
    LangjsonType,
    LangTextType,
    ReturnLangText,
} from "../types/type";
import readLanguage from "./readLanguage";

export default function LangText<Return = ReturnLangText>(
    langjson: LangjsonType,
    langtext: LangTextType,
    options: Options = {},
    lang: Language | undefined = undefined,
): Return {
    let text: string = "";
    if (typeof langtext === "string") {
        text = langtext;
    } else {
        text = langtext[0];
        options = langtext[1] || options;
    }
    const keys = text.split(".");
    const langObject = readLanguage(langjson, langjson, lang);

    let translatedText: any = langObject;
    for (const key of keys) {
        if (translatedText[key]) {
            translatedText = translatedText[key];
        } else {
            return text as Return;
        }
    }
    translatedText = Object.keys(options).reduce(
        (acc, key) => acc.replace(new RegExp(`{{${key}}}`, "g"), options[key]),
        translatedText,
    );

    if (options?.next && options?.before) {
        return `${options?.before}${translatedText}${options?.next}` as Return;
    } else if (options?.next) {
        return `${translatedText}${options?.next}` as Return;
    } else if (options?.before) {
        return `${options?.before}${translatedText}` as Return;
    }
    return (translatedText ?? langObject?.error) as Return;
}
