import * as Enums from "../basic/enums";
import * as Types from "../../types";
import * as TypeHelper from "./TypeHelper";
import * as ExceptionHelper from "./ExceptionHelper";

export function numberCast(value: string | number | undefined): number | undefined {
    if (value === undefined || typeof value === "number") return value;

    if (/^(([1-9][0-9]*(\.\d{1,2})?)|(0\.\d{1,2}))$/.test(value)) {
        return Number(value);
    }

    throw new Error(`\`${value}\` isn't number.`);
}

export function offsetCast(value: Enums.WindowOffset | Types.WindowCoord | undefined, width: number, height: number): Types.WindowCoord | undefined {
    if (value === undefined) return value;

    if (TypeHelper.isWindowCoord(value)) {
        const [left, top] = <number[]>value;
        return [left, top];
    };

    const coord: Types.WindowCoord = [0, 0];
    switch (value) {
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
            return ExceptionHelper.assertNever(value);
    }

    return coord;
}

export function animateCast(animate: Enums.WindowAnimate | false): Enums.WindowAnimate {
    if (animate === false) return Enums.WindowAnimate.NONE;

    switch (animate) {
        case Enums.WindowAnimate.NONE:
            return Enums.WindowAnimate.NONE;
        case Enums.WindowAnimate.ZOOM:
            return Enums.WindowAnimate.ZOOM;
        default:
            return ExceptionHelper.assertNever(animate);
    }
}
