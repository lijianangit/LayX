import { ThemeEnum } from "../enums/ThemeEnum";

export interface ContainerOptions {
    id: string;
    width?: number | string;
    height?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    theme?: ThemeEnum;
}