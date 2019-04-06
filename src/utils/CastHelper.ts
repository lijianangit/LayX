import * as Enums from "../basic/enums";
import * as Types from "../../types";
import * as TypeHelper from "./TypeHelper";
import * as ExceptionHelper from "./ExceptionHelper";
import * as JsonHelper from "./JsonHelper";

export function numberCast(option: number | string | undefined, defaultValue: number): number {
    if (option === undefined) return defaultValue;
    if (typeof option === "number") return option;
    if (/^(([1-9][0-9]*(\.\d{1,2})?)|(0\.\d{1,2}))$/.test(option)) {
        return Number(option);
    }

    return ExceptionHelper.assertNumber(option);
}

export function stringCast(option: any): string {
    if (!TypeHelper.isStringWithNotEmpty(option)) return ExceptionHelper.assertString(option);
    return option;
}

export function booleanCast(option: boolean | undefined, defaultValue: boolean): boolean {
    return option === undefined ? defaultValue : option;
}

export function stringOrBooleanStyleCast(option: string | boolean | undefined, defaultValue: string | null, trueValue?: string | null): string | null {
    if (option === undefined) return defaultValue;
    if (option === true) {
        if (trueValue === undefined) {
            return defaultValue;
        }
        else {
            return trueValue;
        }
    }
    if (option === false) return null;
    return option;
}

export function typeOrBooleanCast<T>(option: T | boolean | undefined, defaultValue: T | false, trueValue?: T | false, falseValue?: T | false): T | false {
    if (option === undefined) return defaultValue;
    if (option === true) {
        if (trueValue === undefined) {
            return defaultValue;
        }
        else {
            return trueValue;
        }
    }
    if (option === false) {
        if (falseValue === undefined) {
            return false;
        }
        else {
            return falseValue;
        }
    }
    return option;
}

export function undefinedCast<T>(option: T, defaultValue: T): T {
    if (option === undefined) return defaultValue;
    else return option;
}

export function windowModeCast(option: any, defaultValue: Enums.WindowMode): Enums.WindowMode {
    if (option === undefined) return defaultValue;
    TypeHelper.isWindowMode(option)
    return option;
}

export function borderCast(option: Types.BorderOption | string | boolean | undefined, defaultValue: Types.BorderOption): [string | null, string | null] {
    if (typeof option === "string") return [option, null];
    if (option === false) return [null, null];

    let borderStyle: [string | null, string | null] = [null, null];
    let value = <Types.BorderOption>{};
    if (option === undefined || option === true) {
        value = JsonHelper.merge(<Types.BorderOption>{}, defaultValue);
    }
    else {
        value = JsonHelper.merge(defaultValue, option);
    }

    if (typeof value.width === "number"
        && typeof value.color === "string"
        && (typeof value.style === "string" && ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "inherit"].indexOf(value.style) > -1)) {
        borderStyle[0] = `${value.width}px ${value.style} ${value.color}`;
    }

    if (typeof value.radius === "number") {
        borderStyle[1] = `${value.radius}px`;
    }

    return borderStyle;
}

export function offsetCast(option: Enums.WindowOffset | Types.WindowCoord | undefined, width: number, height: number): Types.WindowCoord {
    if (option === undefined) return [(innerWidth - width) / 2, (innerHeight - height) / 2];

    if (TypeHelper.isWindowCoord(option)) {
        const [left, top] = <number[]>option;
        return [left, top];
    }

    const coord: Types.WindowCoord = [0, 0];
    switch (option) {
        case Enums.WindowOffset.LEFT_TOP:
            break;
        case Enums.WindowOffset.LEFT_CENTER:
            coord[0] = 0;
            coord[1] = (innerHeight - height) / 2;
            break;
        case Enums.WindowOffset.LEFT_BOTTOM:
            coord[0] = 0;
            coord[1] = innerHeight - height;
            break;
        case Enums.WindowOffset.TOP_CENTER:
            coord[0] = (innerWidth - width) / 2;
            coord[1] = 0;
        case Enums.WindowOffset.CENTER:
            coord[0] = (innerWidth - width) / 2;
            coord[1] = (innerHeight - height) / 2;
            break;
        case Enums.WindowOffset.BOTTOM_CENTER:
            coord[0] = (innerWidth - width) / 2;
            coord[1] = innerHeight - height;
            break;
        case Enums.WindowOffset.RIGHT_TOP:
            coord[0] = innerWidth - width;
            coord[1] = 0;
            break;
        case Enums.WindowOffset.RIGHT_CENTER:
            coord[0] = innerWidth - width;
            coord[1] = (innerHeight - height) / 2;
            break
        case Enums.WindowOffset.RIGHT_BOTTOM:
            coord[0] = innerWidth - width;
            coord[1] = innerHeight - height;
            break;
        default:
            return ExceptionHelper.assertNever(option);
    }

    return coord;
}

export function windowAnimateCast(option: any, defaultValue: Enums.WindowAnimate, trueValue?: Enums.WindowAnimate, falseValue?: Enums.WindowAnimate): Enums.WindowAnimate {
    if (option === undefined) return defaultValue;
    if (option === true) {
        if (trueValue === undefined) {
            return Enums.WindowAnimate.ZOOM;
        }
        else {
            return trueValue;
        }
    }
    if (option === false) {
        if (falseValue === undefined) {
            return Enums.WindowAnimate.NONE;
        }
        else {
            return falseValue;
        }
    }
    TypeHelper.isWindowAnimate(option);
    return option;
}

export function jsonOrBooleanCast<T extends Types.JsonObject>(option: T | boolean | undefined, defaultValue: T | false, trueValue?: T | false, falseValue?: T | false): T | false {
    if (option === undefined) return defaultValue;
    if (option === true) {
        if (trueValue === undefined) {
            return defaultValue;
        }
        else {
            return trueValue;
        }
    }
    if (option === false) {
        if (falseValue === undefined) {
            return false;
        }
        else {
            return falseValue;
        }
    }
    if (defaultValue === false) return option;
    return JsonHelper.merge(defaultValue, option);
}

export function contextMenuButtonsCast(option: any): Array<Types.ContextMenuButtonOption> | false {
    if (option === undefined || option === false) return false;
    TypeHelper.isContextMenuButtons(option);
    return option;
}

export function actionButtonsCast(option: Array<Types.ActionButtonOption> | boolean | undefined, defaultValue: Array<Types.ActionButtonOption> | false): Array<Types.ActionButtonOption> | false {
    if (option === undefined || option === true) return defaultValue;
    if (option === false) return false;
    TypeHelper.isActionButtons(option);
    return option;
}

export function contentTypeCast(option: any, defaultValue: Enums.WindowContentType): Enums.WindowContentType {
    if (option === undefined) return defaultValue;
    TypeHelper.isContentType(option)
    return option;
}

export function stringOrElementCast(option: any): string | Element {
    if (!TypeHelper.isStringOrElement(option)) return ExceptionHelper.assertNever(option);
    return option;
}