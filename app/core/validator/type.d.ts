export type BaseType = "bigint" | "boolean" | "function" | "number" | "object" | "string" | "symbol" | "undefined";
export type JSONObject = {
    constructor: Object;
    [key: string]: any;
};
export type ColorString = string;
export type NoEmptyOrNullString = string;
export type IntegerNumber = number;
export type ValueType = number | string | boolean | undefined | null;
export type CheckValidator = {
    (item: any, ...args: Array<any>): boolean;
};
export type FunctionValidator = CheckValidator | [CheckValidator, ...Array<any>] | [[CheckValidator, ...Array<any>], ...Array<any>];