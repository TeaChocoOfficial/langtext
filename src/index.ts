//-Path: "langtext/src/index.ts"
//* function
// * isLang.ts
import isLang from "./function/isLang";
// * storage.ts
export { getStorageSetting, setStorageSetting } from "./function/storage";
//* hook
// * LangText.ts
import LangText from "./hook/LangText";
// * readLanguage.ts
import readLanguage from "./hook/readLanguage";
//* types
// * lang.ts
export { languages } from "./types/lang";
// * type.ts
export type {
    Language,
    Options,
    Resource,
    Resources,
    ReturnLang,
    ReturnLangText,
    LangTextType,
    BaseLangjsonType,
    LangjsonType,
} from "./types/type";

export { isLang, LangText, readLanguage };
