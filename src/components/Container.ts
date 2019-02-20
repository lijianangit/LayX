import Component from "./Componet";
import { Theme } from "../enums/Theme";
import { ContainerOptions, ResizeOptions, ToolBarOptions, TopMenuOptions, StatuBarOptions, SideBarOptions } from "../types/Constraint";
import { convertDimension, getKebabCase } from "../utils/ValueHelper";
import { leastOneTrue, reverseBooleanObject, merge } from "../utils/ObjectHelper";
import ToolBar from "./ToolBar";
import TopMenu from "./TopMenu";
import StatuBar from "./StatuBar";
import SideBar from "./SideBar";

export default class Container implements Component {
    readonly name: string = "container";

    readonly prefix: string = "layx-";

    readonly id: string;
    width: number = 800;
    height: number = 600;
    minWidth: number = 200;
    minHeight: number = 200;
    maxWidth: number = innerWidth;
    maxHeight: number = innerHeight;
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
    toolBar: ToolBarOptions | undefined = {};
    topMenu: TopMenuOptions | undefined = undefined;
    statuBar: StatuBarOptions | undefined = undefined;
    sideBar: SideBarOptions | undefined = undefined;

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

        if (typeof options.toolBar === "boolean" && options.toolBar === false) {
            this.toolBar = undefined;
        }
        else if (typeof options.toolBar === "object") {
            this.toolBar = merge(<ToolBarOptions>this.toolBar, options.toolBar);
        }

        if (typeof options.topMenu === "object") {
            this.topMenu = merge(<TopMenuOptions>{}, options.topMenu);
        }

        if (typeof options.statuBar === "object") {
            this.statuBar = merge(<StatuBarOptions>{}, options.statuBar);
        }

        if (typeof options.sideBar === "object") {
            this.sideBar = merge(<SideBarOptions>{}, options.sideBar);
        }
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const containerElement = document.createElement("div");
        containerElement.id = this.id;
        containerElement.classList.add(`${this.prefix}container`, `${this.prefix}theme-${this.theme}`);
        containerElement.style.width = `${this.width}px`;
        containerElement.style.height = `${this.height}px`;
        containerElement.style.minWidth = `${this.minWidth}px`;
        containerElement.style.minHeight = `${this.minHeight}px`;
        containerElement.style.maxWidth = this.maxWidth === innerWidth ? null : `${this.maxWidth}px`;
        containerElement.style.maxHeight = this.maxHeight === innerHeight ? null : `${this.maxHeight}px`;
        containerElement.style.background = this.background;

        const parcloseElement = this.createParcloseView();
        if (parcloseElement) {
            fragment.appendChild(parcloseElement);
        }

        for (const component of [ToolBar, TopMenu, SideBar, StatuBar]) {
            this.initComponet(containerElement, component);
        }

        const resizeElements = this.createResizeView();
        if (resizeElements) {
            containerElement.appendChild(resizeElements);
        }

        fragment.appendChild(containerElement);
        return fragment;
    }

    createParcloseView(): HTMLElement | undefined {
        if (this.parclose === true) {
            const parcloseElement = document.createElement("div");
            parcloseElement.id = `${this.id}-parclose`;
            parcloseElement.classList.add(`${this.prefix}parclose`);
            return parcloseElement;
        }
    }

    private createResizeView(): HTMLElement | undefined {
        if (leastOneTrue<ResizeOptions>(this.resize)) {
            const resizeElements = document.createElement("div");
            resizeElements.classList.add(`${this.prefix}resizes`);

            for (const key of Object.keys(this.resize)) {
                this.createResizeItem(resizeElements, <boolean>this.resize.top, getKebabCase(key));
            }
            return resizeElements;
        }
    }

    private createResizeItem(parent: HTMLElement, isCreate: boolean, direction: string): void {
        if (!isCreate) return;

        const resize = document.createElement("div");
        resize.classList.add(`${this.prefix}resize-${direction}`);
        parent.appendChild(resize);
    }

    private initComponet<T extends Component>(parent: HTMLElement, ctor: { new(container: Container): T; }): T | undefined {
        const componet = new ctor(this);
        if ((<any>this)[componet.name] !== undefined) {
            const componentFragment = componet.createView();
            parent.appendChild(componentFragment);
            return componet;
        }
    }
}