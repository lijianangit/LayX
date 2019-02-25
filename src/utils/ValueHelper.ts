import { WindowCoord } from "../enums/WindowCoord";

export function convertDimension(dimension: number | string | undefined, reference: "BROWSER_INNER_WIDTH" | "BROWSER_INNER_HEIGHT" = "BROWSER_INNER_WIDTH"): number | undefined {
    if (typeof dimension === "undefined") return undefined;
    if (typeof dimension === "number") {
        return dimension;
    }
    if (/^(([1-9][0-9]*(\.\d{1,2})?)|(0\.\d{1,2}))$/.test(dimension)) {
        return Number(dimension);
    }
    if (/^(100|[1-9]?\d(\.\d\d?)?)%$/.test(dimension)) {

        const ratio: number = Number(dimension.replace("%", ""));
        switch (reference) {
            case "BROWSER_INNER_WIDTH":
                return innerWidth * (ratio / 100);
            case "BROWSER_INNER_HEIGHT":
                return innerHeight * (ratio / 100);
        }
    }
}

export function getKebabCase(str: string) {
    return str.replace(/[A-Z]/g, function (item): string {
        return "-" + item.toLowerCase();
    });
}

export function calcCoord(width: number, height: number, coordEnum: WindowCoord | undefined): [number, number] {
    const coord: [number, number] = [0, 0];// left,top
    switch (coordEnum) {
        case WindowCoord.CENTER:
            coord[0] = (innerWidth - width) / 2;
            coord[1] = (innerHeight - height) / 2;
            break;
        case WindowCoord.LEFT_CENTER:
            coord[0] = 0;
            coord[1] = (innerHeight - height) / 2;
            break;
        case WindowCoord.RIGHT_CENTER:
            coord[0] = innerWidth - width;
            coord[1] = (innerHeight - height) / 2;
            break;
        case WindowCoord.TOP_CENTER:
            coord[0] = (innerWidth - width) / 2;
            coord[1] = 0;
            break;
        case WindowCoord.BOTTOM_CENTER:
            coord[0] = (innerWidth - width) / 2;
            coord[1] = innerHeight - height;
            break;
        case WindowCoord.LEFT_TOP:
            coord[0] = 0;
            coord[1] = 0;
            break;
        case WindowCoord.RIGHT_TOP:
            coord[0] = innerWidth - width;
            coord[1] = 0;
            break;
        case WindowCoord.LEFT_BOTTOM:
            coord[0] = 0;
            coord[1] = innerHeight - height;
            break;
        case WindowCoord.RIGHT_BOTTOM:
            coord[0] = innerWidth - width;
            coord[1] = innerHeight - height;
            break;
        default:
            coord[0] = (innerWidth - width) / 2;
            coord[1] = (innerHeight - height) / 2;
            break;
    }
    return coord;
}