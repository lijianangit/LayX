import { AlignOptional, AnimationOptional, BorderStyleOptional } from '../const';
import {
    checkArray, checkArrayEach, checkBoolean, checkColor, checkContract, checkFunction, checkIn,
    checkNoEmptyOrNull, checkPstInt, checkPstNumber
} from '../core/validator';

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

export const UIIconOptionContract = {
    icon: checkNoEmptyOrNull,
    color: checkColor,
    backgroundColor: checkColor,
    disabled: checkBoolean,
    visible: checkBoolean,
    size: checkPstNumber,
    width: checkPstNumber,
    hoverClasses: [[checkArray, true], undefined],
    handler: checkFunction,
    switchIcon: checkNoEmptyOrNull,
    switchColor: checkColor,
    switchBackgroundColor: checkColor,
    switchHandler: checkFunction
}

export const UIActionBarOptionContract = [{
    height: checkPstNumber,
    backgroundColor: checkColor,
    align: [checkIn, AlignOptional.LEFT, AlignOptional.RIGHT],
    color: checkColor,
    extra: [UIIconOptionContract, false],
    about: [UIIconOptionContract, false],
    develop: [UIIconOptionContract, false],
    refresh: [UIIconOptionContract, false],
    istop: [UIIconOptionContract, false],
    minimize: [UIIconOptionContract, false],
    maximize: [UIIconOptionContract, false],
    destroy: [UIIconOptionContract, false],
    customize: [[checkArrayEach, [checkContract, UIIconOptionContract]]]
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
    border: BorderOptionContract,
    actionBar: UIActionBarOptionContract
};