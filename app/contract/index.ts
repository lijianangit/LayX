import { AnimationOptional, BorderStyleOptional } from '../const';
import { checkBoolean, checkColor, checkIn, checkPstInt, checkPstNumber } from '../core/validator';

export const BorderOptionContract = [{
    width: checkPstNumber,
    style: [checkIn, BorderStyleOptional.DASHED, BorderStyleOptional.SOLID, BorderStyleOptional.DOUBLE, BorderStyleOptional.DOTTED],
    color: checkColor,
    radius: checkPstInt
}, false];

export const BoxShadowOptionContract = [{
    offsetX: checkPstNumber,
    offsetY: checkPstNumber,
    blurRadius: checkPstInt,
    spreadRadius: checkPstInt,
    color: checkColor
}, false];

export const GlobalUIWindowOptionContract = {
    width: checkPstNumber,
    height: checkPstNumber,
    minWidth: checkPstNumber,
    minHeight: checkPstNumber,
    maxWidth: checkPstNumber,
    maxHeight: checkPstNumber,
    backgroundColor: checkColor,
    boxShadow: BoxShadowOptionContract,
    animate: [[checkIn, AnimationOptional.ZOOM], false],
    border: BorderOptionContract
};