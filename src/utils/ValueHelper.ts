import { WindowOffset } from "../basic/enums/WindowOffset";
import { WindowCoord } from "../../types";
import { isWindowCoord } from "./TypeHelper";
import { assertNever } from "./ExceptionHelper";

export function numberCast(value: string | number | undefined): number | undefined {
    if (value === undefined || typeof value === "number") return value;

    if (/^(([1-9][0-9]*(\.\d{1,2})?)|(0\.\d{1,2}))$/.test(value)) {
        return Number(value);
    }

    throw new Error(`\`${value}\` isn't number.`);
}

export function offsetCast(value: WindowOffset | WindowCoord | undefined, width: number, height: number): WindowCoord | undefined {
    if (value === undefined) return value;

    if (isWindowCoord(value)) {
        const [left, top] = <number[]>value;
        return [left, top];
    };

    const coord: WindowCoord = [0, 0];
    switch (value) {
        case WindowOffset.LEFT_TOP:
            break;
        case WindowOffset.LEFT_CENTER:
            coord[0] = 0;
            coord[1] = (innerHeight - height) / 2;
            break;
        case WindowOffset.LEFT_BOTTOM:
            coord[0] = 0;
            coord[1] = innerHeight - height;
            break;
        case WindowOffset.TOP_CENTER:
            coord[0] = (innerWidth - width) / 2;
            coord[1] = 0;
        case WindowOffset.CENTER:
            coord[0] = (innerWidth - width) / 2;
            coord[1] = (innerHeight - height) / 2;
            break;
        case WindowOffset.BOTTOM_CENTER:
            coord[0] = (innerWidth - width) / 2;
            coord[1] = innerHeight - height;
            break;
        case WindowOffset.RIGHT_TOP:
            coord[0] = innerWidth - width;
            coord[1] = 0;
            break;
        case WindowOffset.RIGHT_CENTER:
            coord[0] = innerWidth - width;
            coord[1] = (innerHeight - height) / 2;
            break
        case WindowOffset.RIGHT_BOTTOM:
            coord[0] = innerWidth - width;
            coord[1] = innerHeight - height;
            break;
        default:
            return assertNever(value);
    }

    return coord;
}