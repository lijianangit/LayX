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