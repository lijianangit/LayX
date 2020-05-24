import { invalidParameter } from '../exception';
import { assertMin } from '../verification';

export function unique(srcArray: Array<any>) {
    return srcArray.filter((item, index, array) => array.indexOf(item, 0) === index);
}

export function includes(arr1: Array<any>, arr2: Array<any>) {
    return arr2.every(val => arr1.includes(val));
}

export function moveTo(arr: Array<any>, ele: any, index: number = 0): void {
    if (!assertMin(0)(index)) invalidParameter("The parameter `index` isn't less than 0.");

    arr.forEach((item, index) => {
        if (item === ele) {
            arr.splice(index, 1);
            return;
        }
    });

    arr.splice(index, 0, ele);
}

export function remove(arr: Array<any>, ele: any): void {
    arr.splice(arr.indexOf(ele), 1);
}