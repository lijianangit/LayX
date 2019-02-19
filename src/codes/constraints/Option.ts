import { Type, Position } from "../windows/Enum"

export default interface Option {
    id: string;
    type: Type;
    title?: string;
    width?: number | string;
    height?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    position?: Position | [number, number]
}