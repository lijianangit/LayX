import UIComponent from "../core/ui/UIComponent";
import UIControl from "../core/ui/UIControl";
import * as ElementHelper from "../utils/ElementHelper";
import * as Consts from "../core/enum/Consts";
import * as CastHelper from "../utils/CastHelper";
import * as TypeHelper from "../utils/TypeHelper";
import StateStore from "../core/store/StateStore";
import * as Types from "../core/Types";
import CoordinateProfile from "../core/type/CoordinateProfile";
import * as ExceptionHelper from "../utils/ExceptionHelper";
import * as NumberHelper from "../utils/NumberHelper";

export default class UIBlock extends UIComponent implements UIControl {
    /**
     * 构造函数
     * @param type 层类型
     */
    constructor(public type: Consts.BlockType = Consts.BlockType.DEFAULT) {
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
        let width = CastHelper.numberOrUndefinedCast(value);

        // 处理最大、最小值问题
        const newValue = NumberHelper.handlerMaxAndMinValue("all", width, this.maxWidth, this.minWidth);
        if (newValue) {
            width = newValue;
        };

        this._width = width;
    }

    /**
     * 高度
     */
    private _height?: number;
    get height(): number | undefined {
        return this._height;
    }
    set height(value: number | undefined) {
        let height = CastHelper.numberOrUndefinedCast(value);

        // 处理最大、最小值问题
        const newValue = NumberHelper.handlerMaxAndMinValue("all", height, this.maxHeight, this.minHeight);
        if (newValue) {
            height = newValue;
        }

        this._height = height;
    }

    /**
     * 最大宽度
     */
    private _maxWidth?: number;
    get maxWidth(): number | undefined {
        return this._maxWidth;
    }
    set maxWidth(value: number | undefined) {
        let maxWidth = CastHelper.numberOrUndefinedCast(value);

        // 处理最大、最小值问题
        const newValue = NumberHelper.handlerMaxAndMinValue("max", this.width, maxWidth);
        if (newValue) {
            this._width = newValue;
        }

        if (NumberHelper.compareValue(this.minWidth, maxWidth)) {
            throw new Error("The max width can't be letter to min width.");
        }

        this._maxWidth = maxWidth;
    }

    /**
     * 最大高度
     */
    private _maxHeight?: number;
    get maxHeight(): number | undefined {
        return this._maxHeight;
    }
    set maxHeight(value: number | undefined) {
        let maxHeight = CastHelper.numberOrUndefinedCast(value);

        // 处理最大、最小值问题
        const newValue = NumberHelper.handlerMaxAndMinValue("max", this.height, maxHeight);
        if (newValue) {
            this._height = newValue;
        }

        if (NumberHelper.compareValue(this.minHeight, maxHeight)) {
            throw new Error("The max height can't be letter to min height.");
        }

        this._maxHeight = maxHeight;
    }

    /**
     * 最小宽度
     */
    private _minWidth?: number;
    get minWidth(): number | undefined {
        return this._minWidth;
    }
    set minWidth(value: number | undefined) {
        let minWidth = CastHelper.numberOrUndefinedCast(value);

        // 处理最大、最小值问题
        const newValue = NumberHelper.handlerMaxAndMinValue("min", this.width, minWidth);
        if (newValue) {
            this._width = newValue;
        }

        if (NumberHelper.compareValue(minWidth, this.maxWidth)) {
            throw new Error("The min width can't be greater to max width.");
        }

        this._minWidth = minWidth;
    }

    /**
     * 最小高度
     */
    private _minHeight?: number;
    get minHeight(): number | undefined {
        return this._minHeight;
    }
    set minHeight(value: number | undefined) {
        let minHeight = CastHelper.numberOrUndefinedCast(value);

        // 处理最大、最小值问题
        const newValue = NumberHelper.handlerMaxAndMinValue("min", this.height, minHeight);
        if (newValue) {
            this._height = newValue;
        }

        if (NumberHelper.compareValue(minHeight, this.maxHeight)) {
            throw new Error("The min height can't be greater to max height.");
        }

        this._minHeight = minHeight;
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
     * 创建DOM元素
     * @param inject 注入器，支持外部拓展元素
     */
    createView(inject?: (element: Element) => Element): Element {
        const stateStore = StateStore.instance;
        const element = ElementHelper.createElement("div");
        element.setAttribute("data-id", this.uniqueId);
        element.setAttribute("data-type", this.type);

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
            zIndex: this.mode === Consts.PresentMode.FLOAT ? `${stateStore.zIndex}` : undefined,
            background: this.background,
            border: this.border,
            borderRadius: this.borderRadius ? `${this.borderRadius}px` : undefined,
            webkitBorderRadius: this.borderRadius ? `${this.borderRadius}px` : undefined,
            boxShadow: this.shadow,
            webkitBoxShadow: this.shadow
        });

        // 注册事件
        this.registerEvent(element);

        if (inject) inject(element);
        return element;
    }

    /**
     * 更新层级
     */
    updateZIndex() {
        const stateStore = StateStore.instance;

        ElementHelper.addStyles(<HTMLElement | null>this.element, <Types.CSSStyleObject>{
            zIndex: this.mode === Consts.PresentMode.FLOAT ? `${stateStore.zIndex}` : undefined,
        });
    }

    /**
     * 删除层
     */
    destroy() {
        if (this.animatable) {
            const element = <HTMLElement | null>this.element;
            if (!element) return;
            const stateStore = StateStore.instance;

            ElementHelper.addClasses(element, stateStore.prefix,
                `animate-${this.animate}-to-out`
            );
        }
        else {
            this.dispose();
        }
    }

    /**
     * 更新坐标
     * @param coordinate 坐标信息
     */
    updateOffset(coordinate: CoordinateProfile) {
        const element = <HTMLElement | null>this.element;
        if (!element) return;

        if (NumberHelper.compareValue(coordinate.minWidth, coordinate.maxWidth)) {
            throw new Error("The max width can't be letter to min width.");
        }

        if (NumberHelper.compareValue(coordinate.minHeight, coordinate.maxHeight)) {
            throw new Error("The max height can't be letter to min height.");
        }

        coordinate.width = NumberHelper.handlerMaxAndMinValue("all", coordinate.width, coordinate.maxWidth, coordinate.minWidth);
        coordinate.height = NumberHelper.handlerMaxAndMinValue("all", coordinate.height, coordinate.maxHeight, coordinate.minHeight);

        ElementHelper.addStyles(element, <Types.CSSStyleObject>{
            width: coordinate.width ? `${coordinate.width}px` : undefined,
            height: coordinate.height ? `${coordinate.height}px` : undefined,
            maxWidth: coordinate.maxWidth ? `${coordinate.maxWidth}px` : undefined,
            maxHeight: coordinate.maxHeight ? `${coordinate.maxHeight}px` : undefined,
            minWidth: coordinate.maxHeight ? `${coordinate.minWidth}px` : undefined,
            minHeight: coordinate.minHeight ? `${coordinate.minHeight}px` : undefined,
            left: this.mode === Consts.PresentMode.FLOAT && coordinate.left ? `${coordinate.left}px` : undefined,
            top: this.mode === Consts.PresentMode.FLOAT && coordinate.top ? `${coordinate.top}px` : undefined,
        });

        // 更新组件信息
        if (coordinate.width) this.width = coordinate.width;
        if (coordinate.height) this.height = coordinate.height;
        if (coordinate.maxWidth) this.maxWidth = coordinate.maxWidth;
        if (coordinate.maxHeight) this.maxHeight = coordinate.maxHeight;
        if (coordinate.minWidth) this.minWidth = coordinate.minWidth;
        if (coordinate.minHeight) this.minHeight = coordinate.minHeight;
        if (coordinate.left) this.left = coordinate.left;
        if (coordinate.top) this.top = coordinate.top;
    }

    /**
     * 销毁层并释放内存
     */
    private dispose() {
        const stateStore = StateStore.instance;

        ElementHelper.removeElement(<HTMLElement | null>this.element);
        delete (<any>stateStore.components)[this.uniqueId];
    }

    /**
     * 注册事件
     * @param element DOM元素
     */
    private registerEvent(element: HTMLElement): void {
        if (!element) return;

        const stateStore = StateStore.instance;
        // 动画起始
        element.addEventListener("animationstart", (ev: AnimationEvent) => {
        });

        // 动画结束
        element.addEventListener("animationend", (ev: AnimationEvent) => {
            var animateToInClass = `animate-${this.animate}-to-in`;
            var animateToOutClass = `animate-${this.animate}-to-out`;

            if (this.animatable) {
                if (ElementHelper.hasClass(element, stateStore.prefix, animateToInClass)) {
                    ElementHelper.removeClasses(element, stateStore.prefix, animateToInClass);
                }

                // 删除层
                if (ElementHelper.hasClass(element, stateStore.prefix, animateToOutClass)) {
                    ElementHelper.removeClasses(element, stateStore.prefix, animateToOutClass);
                    this.dispose();
                }
            }
        });
    }
}