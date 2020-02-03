import { DirectionOptional } from '../const';
import { parameterInvalid } from '../core/exception';
import { checkArrayEach, checkPstNumber } from '../core/validator';
import { DirectionOrCoord } from '../type';

export function convertDirection(width: number, height: number, directionOrCoord?: DirectionOrCoord): [number, number] {
    if (!checkPstNumber(width) || !checkPstNumber(height)) parameterInvalid();

    if (directionOrCoord === undefined) return [(innerWidth - width) / 2, (innerHeight - height) / 2];

    if (checkArrayEach<number>(directionOrCoord, checkPstNumber)) {
        if (directionOrCoord.length !== 2) parameterInvalid();
        return [directionOrCoord[0], directionOrCoord[1]];
    }

    switch (directionOrCoord) {
        case DirectionOptional.CENTER:
            return [(innerWidth - width) / 2, (innerHeight - height) / 2];
        case DirectionOptional.TOP_CENTER:
            return [(innerWidth - width) / 2, 0];
        case DirectionOptional.BOTTOM_CENTER:
            return [(innerWidth - width) / 2, innerHeight - height];
        case DirectionOptional.LEFT_TOP:
            return [0, 0];
        case DirectionOptional.LEFT_MIDDLE:
            return [0, (innerHeight - height) / 2];
        case DirectionOptional.LEFT_BOTTOM:
            return [0, innerHeight - height];
        case DirectionOptional.RIGHT_TOP:
            return [innerWidth - width, 0];
        case DirectionOptional.RIGHT_MIDDLE:
            return [innerWidth - width, (innerHeight - height) / 2];
        case DirectionOptional.RIGHT_BOTTOM:
            return [innerWidth - width, innerHeight - height];
        default:
            parameterInvalid();
    }
}