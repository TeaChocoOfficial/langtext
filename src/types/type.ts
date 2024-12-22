//-Path: "langtext/src/types/type.ts"
import { languages } from "./lang";
type KeyConst<Const extends Record<string, unknown>> = Const[keyof Const];
export type Language = KeyConst<typeof languages>
export type Options = Record<string, ReturnLang>;
export type Resource = Record<Language, string>;
export type Resources = Record<string, object | Resource | string>;
export type ReturnLang = string | number;
export type ReturnLangText = Options | Resources | string;
export type LangTextType = string | [string] | [string, Options];
export type BaseLangjsonType = { errorlangtext: Resource; languages: Language[] };
export type LangjsonType = Resources & BaseLangjsonType;
