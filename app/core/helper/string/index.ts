import { parameterInvalid } from '../../exception';
import { checkNoEmptyOrNull } from '../../validator';

export function removeIllegalCharacter(str: string): string {
    if (!checkNoEmptyOrNull(str)) parameterInvalid();

    return str.replace(/[\r\n\t\s]/g, "");
}
