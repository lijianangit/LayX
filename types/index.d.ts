export type CSSStyleObject = CSSStyleDeclaration & { [key: string]: string | null };

export interface WindowOptions {
    id: string;
    width?: number;
    height?: number;
}

export interface Layx {
    (options: any): void;
    create(options: any): void;
}