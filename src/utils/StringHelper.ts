export function getKebabCase(str: string) {
    return str.replace(/[A-Z]/g, function (i) {
        return '-' + i.toLowerCase();
    })
}

export function getCamelCase(str: string) {
    return str.replace(/-([a-z])/g, function (all, i) {
        return i.toUpperCase();
    })
}

export function exchangeValue<T>(first: T, two: T): [T, T] {
    let temp: T = first;
    first = two;
    two = temp;

    return [first, two];
}

export function removeValidSymbol(str: string): string {
    let resultStr = str.trim();
    if (resultStr.length === 0) return resultStr;

    resultStr = str.replace(/[\r\n\t\s]/g, "");

    return resultStr;
}

export function mendZero(str: string, total: number): string {
    if (str.length === total) return str;
    if (str.length < total) {
        let zeros = "";
        for (let i = 0; i < total - str.length; i++) {
            zeros += "0";
        }
        return zeros + str;
    }
    return str.substr(0, total);
}