import UIComponent from "../core/ui/UIComponent";
import UIControl from "../core/ui/UIControl";
import * as ElementHelper from "../utils/ElementHelper";
import * as Consts from "../core/enum/Consts";
import * as CastHelper from "../utils/CastHelper";
import * as TypeHelper from "../utils/TypeHelper";
import StateStore from "../core/store/StateStore";
import * as Types from "../core/Types";

export default class UIBlock extends UIComponent implements UIControl {
    constructor() {
        super();
    }

    /**
     * 宽度
     */
    private _width?: number;
    get width(): number | undefined {
        return this._width;
    }
    set width(value: number | undefined) {
        this._width = CastHelper.numberOrUndefinedCast(value);
    }

    /**
     * 高度
     */
    private _height?: number;
    get height(): number | undefined {
        return this._height;
    }
    set height(value: number | undefined) {
        this._height = CastHelper.numberOrUndefinedCast(value);
    }

    /**
     * 最大宽度
     */
    private _maxWidth?: number;
    get maxWidth(): number | undefined {
        return this._maxWidth;
    }
    set maxWidth(value: number | undefined) {
        this._maxWidth = CastHelper.numberOrUndefinedCast(value);
    }

    /**
     * 最大高度
     */
    private _maxHeight?: number;
    get maxHeight(): number | undefined {
        return this._maxHeight;
    }
    set maxHeight(value: number | undefined) {
        this._maxHeight = CastHelper.numberOrUndefinedCast(value);
    }

    /**
     * 最小宽度
     */
    private _minWidth?: number;
    get minWidth(): number | undefined {
        return this._minWidth;
    }
    set minWidth(value: number | undefined) {
        this._minWidth = CastHelper.numberOrUndefinedCast(value);
    }

    /**
     * 最小高度
     */
    private _minHeight?: number;
    get minHeight(): number | undefined {
        return this._minHeight;
    }
    set minHeight(value: number | undefined) {
        this._minHeight = CastHelper.numberOrUndefinedCast(value);
    }

    /**
     * 左坐标(X)
     */
    private _left?: number;
    get left(): number | undefined {
        return this._left;
    }
    set left(value: number | undefined) {
        this._left = CastHelper.numberOrUndefinedCast(value);
    }

    /**
     * 上坐标(Y)
     */
    private _top?: number;
    get top(): number | undefined {
        return this._top;
    }
    set top(value: number | undefined) {
        this._top = CastHelper.numberOrUndefinedCast(value);
    }

    /**
     * 背景
     */
    private _background?: string | false = false;
    get background(): string | false | undefined {
        return this._background;
    }
    set background(value: string | false | undefined) {
        this._background = value === false ? undefined : CastHelper.stringOrUndefinedCast(value);
    }

    /**
     * 阴影
     */
    private _shadow?: string | false = false;
    get shadow(): string | false | undefined {
        return this._shadow;
    }
    set shadow(value: string | false | undefined) {
        this._shadow = value === false ? undefined : CastHelper.stringOrUndefinedCast(value);
    }

    /**
     * 边框
     */
    private _border?: string | false = false;
    get border(): string | false | undefined {
        return this._border;
    }
    set border(value: string | false | undefined) {
        this._border = value === false ? undefined : CastHelper.stringOrUndefinedCast(value);
    }

    /**
     * 圆角
     */
    private _borderRadius?: number;
    get borderRadius(): number | undefined {
        return this._borderRadius;
    }
    set borderRadius(value: number | undefined) {
        this._borderRadius = CastHelper.numberOrUndefinedCast(value);
    }

    /**
     * 动画
     */
    private _animate?: Consts.Animate | false = Consts.Animate.NONE;
    get animate(): Consts.Animate | false | undefined {
        return this._animate;
    }
    set animate(value: Consts.Animate | false | undefined) {
        if (value === false || value === undefined) {
            this._animate = Consts.Animate.NONE;
        }

        if (TypeHelper.isAnimateType(value)) {
            this._animate = value;
        }

        if (this._animate !== Consts.Animate.NONE) {
            this.animatable = true;
        }
    }

    /**
     * 呈现模式
     */
    private _mode?: Consts.PresentMode = Consts.PresentMode.FLOAT;
    get mode(): Consts.PresentMode | undefined {
        return this._mode;
    }
    set mode(value: Consts.PresentMode | undefined) {
        if (value === undefined) this._mode = Consts.PresentMode.FLOAT;

        if (TypeHelper.isPresentMode(value)) {
            this._mode = value;
        }
    }

    /**
     * 动画特征
     */
    private animatable: boolean = false;

    /**
     * 创建页面DOM元素
     * @returns 页面元素 
     */
    createView(): Element {
        const stateStore = StateStore.instance;
        const element = ElementHelper.createElement("div");
        element.setAttribute("data-id", this.uniqueId);

        ElementHelper.addClasses(element, stateStore.prefix,
            Consts.Component.BLOCK,
            this.animatable ? "animate" : undefined,
            this.animatable ? `animate-${this.animate}-to-in` : undefined,
            `mode-${this.mode}`
        );

        ElementHelper.addStyles(element, <Types.CSSStyleObject>{
            width: this.width ? `${this.width}px` : undefined,
            height: this.height ? `${this.height}px` : undefined,
            maxWidth: this.maxWidth ? `${this.maxWidth}px` : undefined,
            maxHeight: this.maxHeight ? `${this.maxHeight}px` : undefined,
            minWidth: this.maxHeight ? `${this.minWidth}px` : undefined,
            minHeight: this.minHeight ? `${this.minHeight}px` : undefined,
            left: this.mode === Consts.PresentMode.FLOAT && this.left ? `${this.left}px` : undefined,
            top: this.mode === Consts.PresentMode.FLOAT && this.top ? `${this.top}px` : undefined,
            background: this.background,
            border: this.border,
            borderRadius: this.borderRadius ? `${this.borderRadius}px` : undefined,
            webkitBorderRadius: this.borderRadius ? `${this.borderRadius}px` : undefined,
            boxShadow: this.shadow,
            webkitBoxShadow: this.shadow
        });

        return element;
    }
}