import * as StringHelper from "./StringHelper";

export function getDatetime(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = StringHelper.mendZero(`${date.getMonth() + 1}`, 2);
    const day = StringHelper.mendZero(`${date.getDate()}`, 2);
    const hour = StringHelper.mendZero(`${date.getHours()}`, 2);
    const minutes = StringHelper.mendZero(`${date.getMinutes()}`, 2);
    const seconds = StringHelper.mendZero(`${date.getSeconds()}`, 2);

    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
}