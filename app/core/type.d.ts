export type PropertyKey = string | symbol;

export type PropertySetter = {
    (newValue: any, propertyKey: PropertyKey, oldValue: any): any;
}

export type CSSStyleDeclarationExpand = {
    [key in keyof CSSStyleDeclaration]?: number | string | null;
}

export interface EventHandler {
    (message: any): void;
}

export interface MessageQueues {
    [key: string]: EventHandler | Array<EventHandler>;
}

export interface EventSetter {
    [eventKey: string]: EventHandler;
}

export interface EventMessage<TEventMessage> {
    dataset: TEventMessage & JSONObject;
    eventTarget: {
        name: string;
        timestamp: number;
    }
}

export type HTMLElementOrNull = HTMLElement | null;

export type CSSClassOrUndefined = string | undefined;

export interface CSSClassSetter {
    (cssClasses: Array<CSSClassOrUndefined>, cssClassIndex: number, cssClass: string): void;
}

export type BaseType = "bigint" | "boolean" | "function" | "number" | "object" | "string" | "symbol" | "undefined";

export type JSONObject = {
    constructor: Object;
    [key: string]: any;
};

export type MouseAndTouchEvent = MouseEvent | TouchEvent;

export type ColorString = string;

export type NoEmptyOrNullString = string;

export type IntegerNumber = number;

export type ValueType = number | string | boolean | undefined | null;

export type Validation = {
    (item: any, ...args: Array<any>): boolean;
};

export type FunctionValidator = Validation
    | [Validation, ...Array<any>]
    | [[Validation, ...Array<any>], ...Array<any>];