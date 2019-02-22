import { WindowOptions, ToolBarOptions, TopMenuOptions, StatuBarOptions, SideBarOptions, ResizeOptions } from "../../typings/Index";
import UIComponent from "./UIComponent";
import { Theme } from "../../enums/Theme";
import { convertDimension, getKebabCase } from "../../utils/ValueHelper";
import { reverseBooleanObject, merge, leastOneTrue } from "../../utils/ObjectHelper";
import AppProcess from "../../core/AppProcess";
import { batchClasses } from "../../utils/StyleHelper";

export default abstract class UIWindow {
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

    constructor(public options: WindowOptions, public app: AppProcess) {
        this.id = `${app.prefix}${options.id}`;

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

    abstract createView(): DocumentFragment;

    createParcloseView(): HTMLElement | undefined {
        if (this.parclose === true) {
            const parcloseElement = document.createElement("div");
            parcloseElement.id = `${this.id}-parclose`;

            parcloseElement.classList.add(...batchClasses(this.app.prefix, "parclose"));
            return parcloseElement;
        }
    }

    createResizeView(): HTMLElement | undefined {
        if (leastOneTrue<ResizeOptions>(this.resize)) {
            const resizeElements = document.createElement("div");

            resizeElements.classList.add(...batchClasses(this.app.prefix, "resizes"));

            for (const key of Object.keys(this.resize)) {
                this.createResizeItem(resizeElements, <boolean>this.resize.top, getKebabCase(key));
            }
            return resizeElements;
        }
    }

    createResizeItem(parent: HTMLElement, isCreate: boolean, direction: string): void {
        if (!isCreate) return;

        const resizeElement = document.createElement("div");
        resizeElement.classList.add(...batchClasses(this.app.prefix, `resize-${direction}`));
        parent.appendChild(resizeElement);
    }

    protected initComponet<T extends UIComponent>(parent: HTMLElement, ctor: { new(window: UIWindow, app: AppProcess): T; }): T | undefined {
        const componet = new ctor(this, this.app);

        if ((<any>this)[componet.name] !== undefined) {
            const componentFragment = componet.createView();
            parent.appendChild(componentFragment);
            return componet;
        }
    }
}