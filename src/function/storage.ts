//-Path: "langtext/src/function/storage.ts"
import { Language } from "../types/type";

export function getStorageSetting(): Language | undefined {
    if (localStorage?.getItem !== undefined) {
        const data = localStorage.getItem("setting lang") as Language;
        if (data === null) {
            return undefined;
        } else {
            return localStorage.getItem("setting lang") as Language;
        }
    }
}

export function setStorageSetting(value: Language) {
    if (localStorage?.setItem !== undefined) {
        localStorage.setItem("setting lang", value);
    }
}
