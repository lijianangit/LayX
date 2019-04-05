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