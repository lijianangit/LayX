import UIComponent from "./ui/UIComponent";

export type JsonType = {
    constructor: Object;
    [key: string]: any;
};

export type ComponentType = {
    constructor: UIComponent | Array<UIComponent>;
    [key: string]: UIComponent | Array<UIComponent>;
} & JsonType;

export type CSSStyleObject = CSSStyleDeclaration & { [key: string]: string | null };