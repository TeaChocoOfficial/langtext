//-Path: "langtext/src/function/isLang.ts"
import { Language } from "../types/type";

export default function isLang(languages: Language[], value: string): Language {
    let callback: Language = languages[0];
    languages.forEach((lang) => {
        if (value === lang) {
            callback = lang;
        }
    });
    return callback;
}
