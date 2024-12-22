//-Path: "langtext/view/app/setup.js"
import { LangText } from "../../dist/index"; //?@teachocoofficial/langtext

const lang = {
    languages: ["en", "th"],
    hello: {
        world: {
            en: "Hello, World!",
            th: "สวัสดีชาวโลก!",
        },
    },
    buttons: {
        setEn: {
            en: "Set English",
            th: "ตั้งค่าเป็นภาษาอังกฤษ",
        },
        setTh: {
            en: "Set Thai",
            th: "ตั้งค่าเป็นภาษาไทย",
        },
    },
    errorlangtext: {
        en: "Error text",
        th: "ข้อความผิดพลาด",
    },
};

export function L(text, options = {}) {
    return LangText(lang, text, options);
}
