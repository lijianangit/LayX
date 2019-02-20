import Component from "./Componet";
import { Theme } from "../enums/Theme";
import { ContainerOptions, ResizeOptions } from "../types/Constraint";
import { convertDimension } from "../utils/ValueHelper";
import { leastOneTrue, reverseBooleanObject, merge } from "../utils/ObjectHelper";
import { ResizeDirection } from "../enums/ResizeDirection";

export default class Container implements Component {
    private prefix: string = "layx-";

    readonly id: string;
    width: number = 800;
    height: number = 600;
    minWidth: number = 200;
    minHeight: number = 200;
    maxWidth: number | null = innerWidth;
    maxHeight: number | null = innerHeight;
    theme: Theme = Theme.DEFAULT;
    background: string = "#ffffff";
    parclose: boolean = false;
    resize: ResizeOptions = {
        top: true,
        left: true,
        right: true,
        bottom: true,
        leftTop: true,
        rightTop: true,
        leftBottom: true,
        rightBottom: true
    };

    constructor(options: ContainerOptions) {
        this.id = `${this.prefix}${options.id}`;

        this.width = convertDimension(options.width) || this.width;
        this.height = convertDimension(options.height, "BROWSER_INNER_HEIGHT") || this.height;
        this.minWidth = convertDimension(options.minWidth) || this.minWidth;
        this.minHeight = convertDimension(options.minHeight, "BROWSER_INNER_HEIGHT") || this.minHeight;
        this.maxWidth = convertDimension(options.maxWidth) || this.maxWidth;
        this.maxHeight = convertDimension(options.maxHeight, "BROWSER_INNER_HEIGHT") || this.maxHeight;
        this.theme = options.theme || this.theme;
        this.background = options.background || this.background;
        this.parclose = typeof options.parclose === "boolean" ? options.parclose : this.parclose;
        if (typeof options.resize === "boolean" && options.resize === false) {
            this.resize = reverseBooleanObject<ResizeOptions>(this.resize);
        }
        else if (typeof options.resize === "object") {
            this.resize = merge(this.resize, options.resize);
        }
    }

    createView(container: Container): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const containerElement = document.createElement("div");
        containerElement.id = container.id;
        containerElement.classList.add(`${this.prefix}container`, `${container.prefix}theme-${container.theme}`);
        containerElement.style.width = `${container.width}px`;
        containerElement.style.height = `${container.height}px`;
        containerElement.style.minWidth = `${container.minWidth}px`;
        containerElement.style.minHeight = `${container.minHeight}px`;
        containerElement.style.maxWidth = container.maxWidth === innerWidth ? null : `${container.maxWidth}px`;
        containerElement.style.maxHeight = container.maxHeight === innerHeight ? null : `${container.maxHeight}px`;
        containerElement.style.background = container.background;

        const parcloseElement = this.createParcloseView(container);
        if (parcloseElement) {
            fragment.appendChild(parcloseElement);
        }

        const resizeElements = this.createResizeView(container);
        if (resizeElements) {
            containerElement.appendChild(resizeElements);
        }

        fragment.appendChild(containerElement);
        return fragment;
    }

    createParcloseView(container: Container): HTMLElement | undefined {
        if (container.parclose === true) {
            const parcloseElement = document.createElement("div");
            parcloseElement.id = `${container.id}-parclose`;
            parcloseElement.classList.add(`${this.prefix}parclose`);
            return parcloseElement;
        }
    }

    private createResizeView(container: Container): HTMLElement | undefined {
        if (leastOneTrue<ResizeOptions>(container.resize)) {
            const resizeElements = document.createElement("div");
            resizeElements.classList.add(`${this.prefix}resizes`);

            this.createResizeItem(resizeElements, <boolean>container.resize.top, ResizeDirection.TOP);
            this.createResizeItem(resizeElements, <boolean>container.resize.left, ResizeDirection.LEFT);
            this.createResizeItem(resizeElements, <boolean>container.resize.right, ResizeDirection.RIGHT);
            this.createResizeItem(resizeElements, <boolean>container.resize.bottom, ResizeDirection.BOTTOM);
            this.createResizeItem(resizeElements, <boolean>container.resize.leftTop, ResizeDirection.LEFT_TOP);
            this.createResizeItem(resizeElements, <boolean>container.resize.rightTop, ResizeDirection.RIGHT_TOP);
            this.createResizeItem(resizeElements, <boolean>container.resize.leftBottom, ResizeDirection.LEFT_BOTTOM);
            this.createResizeItem(resizeElements, <boolean>container.resize.rightBottom, ResizeDirection.RIGHT_BOTTOM);

            return resizeElements;
        }
    }

    private createResizeItem(parent: HTMLElement, isCreate: boolean, direction: ResizeDirection): void {
        if (!isCreate) return;

        const resize = document.createElement("div");
        resize.classList.add(`${this.prefix}resize-${direction}`);
        parent.appendChild(resize);
    }
}