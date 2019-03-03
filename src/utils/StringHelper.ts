export function getKebabCase(str: string) {
    return str.replace(/[A-Z]/g, function (item): string {
        return "-" + item.toLowerCase();
    });
}