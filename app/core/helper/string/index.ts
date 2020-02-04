import { parameterInvalid } from '../../exception';
import { checkNoEmptyOrNull } from '../../validator';

export function removeIllegalCharacter(str: string): string {
    if (!checkNoEmptyOrNull(str)) parameterInvalid();

    return str.replace(/[\r\n\t\s]/g, "");
}

export function stringFormat(str: string, ...args: Array<any>): string {
    if (args.length === 0) return str;

    for (let i = 0; i < args.length; i++) {
        str = str.replace(new RegExp(`\\{${i}\\}`, 'gm'), args[i]);
    }
    return str;
}