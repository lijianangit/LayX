import { invalidParameter } from '../exception';
import { assertNoEmptyOrNull } from '../verification';

export function stringFormat(str: string, ...args: Array<any>): string {
    if (args.length === 0) return str;

    for (let i = 0; i < args.length; i++) {
        str = str.replace(new RegExp(`\\{${i}\\}`, 'gm'), args[i]);
    }
    return str;
}

export function filterInvalidCharacter(str: string): string {
    if (!assertNoEmptyOrNull(str)) invalidParameter("The parameter `str` isn't non-null data.");

    return str.replace(/[\r\n\t\s]/g, "");
}