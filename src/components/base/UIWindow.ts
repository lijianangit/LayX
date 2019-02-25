import { WindowOptions, ToolBarOptions, TopMenuOptions, StatuBarOptions, SideBarOptions, ResizeBarOptions } from "../../typings/Index";
import UIComponent from "./UIComponent";
import { Theme } from "../../enums/Theme";
import { convertDimension, calcCoord } from "../../utils/ValueHelper";
import { merge } from "../../utils/ObjectHelper";
import AppProcess from "../../core/AppProcess";
import { batchClasses } from "../../utils/StyleHelper";
import { WindowMode } from "../../enums/WindowMode";

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
    border: string = "1px solid #3baced";
    boxShadow: string = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
    parclose: boolean = false;
    coord: [number, number] | null = null;
    mode: WindowMode = WindowMode.EMBED;
    resizeBar: ResizeBarOptions | undefined = {};
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
        this.mode = options.mode || this.mode;
        if (typeof options.border === "boolean" && options.border === false) {
            this.border = "none";
        }
        if (typeof options.border === "string") {
            this.border = options.border;
        }

        if (typeof options.boxShadow === "boolean" && options.boxShadow === false) {
            this.boxShadow = "none";
        }
        if (typeof options.boxShadow === "string") {
            this.boxShadow = options.boxShadow;
        }

        if (this.mode === WindowMode.EMBED) {
            if (typeof options.coord === "string" || options.coord === undefined) {
                this.coord = calcCoord(this.width, this.height, options.coord);
            }
        }

        if (typeof options.resizeBar === "boolean" && options.resizeBar === false) {
            this.resizeBar = undefined;
        }
        else if (typeof options.resizeBar === "object") {
            this.resizeBar = merge(<ResizeBarOptions>this.resizeBar, options.resizeBar);
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

    abstract createView(): DocumentFragment | undefined;

    createParcloseView(): HTMLElement | undefined {
        if (this.parclose === true) {
            const parcloseElement = document.createElement("div");
            parcloseElement.id = `${this.id}-parclose`;

            parcloseElement.classList.add(...batchClasses(this.app.prefix, "parclose"));
            return parcloseElement;
        }
    }

    protected initComponet<T extends UIComponent>(parent: HTMLElement, ctor: { new(window: UIWindow, app: AppProcess): UIComponent; }): T | undefined {
        const componet = new ctor(this, this.app);

        if ((<any>this)[componet.name] !== undefined) {
            const componentFragment = componet.createView();
            if (componentFragment) {
                parent.appendChild(componentFragment);
            }
            return <T>componet;
        }
    }
}