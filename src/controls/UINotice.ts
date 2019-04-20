import UIControl from "../basic/interfaces/UIControl";
import UIComponent from "../basic/models/UIComponent";
import App from "../core/App";
import UIIcon from "./UIIcon";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";
import * as TimeHelper from "../utils/TimeHelper";

export default class UINotice extends UIComponent implements UIControl {
    private timer: number = 0;
    private fps: number = 10;

    public static readonly topOffset: number = 24;
    public static readonly space: number = 10;
    public readonly id: number = this.app.noticeZIndex;
    public readonly elementId: string = `${this.app.prefix + Enums.ComponentType.NOTICE}-${this.id}`;

    public type: Enums.NoticeType = Enums.NoticeType.INFO;
    public title: string | undefined;
    public message: string;
    public timeout: number = 3000;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(this.elementId);
    }

    private _processElement: HTMLElement | null = null;
    get processElement() {
        return this.element!.querySelector<HTMLElement>(`.${this.app.prefix + Enums.ComponentType.NOTICE}-process`);
    }

    constructor(app: App, options: Types.NoticeOption) {
        super(app);

        this.type = CastHelper.noticeTypeCast(options.type, this.type);
        this.title = CastHelper.stringOrUndefinedCast(options.title);
        this.message = CastHelper.stringCast(options.message);
        this.timeout = CastHelper.numberCast(options.timeout, this.timeout);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const noticeElement = ElementHelper.createElement("div");
        noticeElement.id = this.elementId;

        ElementHelper.addClasses(noticeElement, this.app.prefix,
            Enums.ComponentType.NOTICE,
            "animate-d3s",
            "animate-fade-in-right"
        );

        ElementHelper.addStyles(noticeElement, <Types.CSSStyleObject>{
            zIndex: `${this.id}`,
        });

        this.bindEvent(noticeElement);

        this.createClose(noticeElement);

        const noticeContainerElement = ElementHelper.createElement("div");
        ElementHelper.addClasses(noticeContainerElement, this.app.prefix,
            `${Enums.ComponentType.NOTICE}-container`,
        );
        this.createTitle(noticeContainerElement);
        this.createContent(noticeContainerElement);

        noticeElement.appendChild(noticeContainerElement);

        this.createNoticeTime(noticeElement);
        this.createProcess(noticeElement);

        fragment.appendChild(noticeElement);
        return fragment;
    }

    private createClose(noticeElement: HTMLElement) {
        const closeElement = ElementHelper.createElement("div");
        ElementHelper.addClasses(closeElement, this.app.prefix,
            `${Enums.ComponentType.NOTICE}-close-button`,
            `flexbox`,
            `flex-center`
        );

        const icon = new UIIcon(this.app, 'destroy');
        const iconElement = icon.present();
        closeElement.appendChild(iconElement);
        closeElement.addEventListener("mousedown", (ev: MouseEvent) => {
            this.destroy();
        });

        noticeElement.appendChild(closeElement);
    }

    private createTitle(noticeElement: HTMLElement) {
        if (this.title !== undefined) {
            const titleElement = ElementHelper.createElement("div");

            ElementHelper.addClasses(titleElement, this.app.prefix,
                `${Enums.ComponentType.NOTICE}-title`
            );

            titleElement.innerText = this.title;
            noticeElement.appendChild(titleElement);
        }
    }

    private createContent(noticeElement: HTMLElement) {
        const contentELement = ElementHelper.createElement("div");

        ElementHelper.addClasses(contentELement, this.app.prefix,
            `${Enums.ComponentType.NOTICE}-content`
        );

        contentELement.innerText = this.message;
        noticeElement.appendChild(contentELement);
    }

    private createNoticeTime(noticeElement: HTMLElement) {

        const timeElement = ElementHelper.createElement("div");
        ElementHelper.addClasses(timeElement, this.app.prefix,
            `${Enums.ComponentType.NOTICE}-time`
        );

        timeElement.innerText = `${TimeHelper.getDatetime()}`;
        noticeElement.appendChild(timeElement);
    }

    private createProcess(noticeElement: HTMLElement) {
        const processElement = ElementHelper.createElement("div");
        ElementHelper.addClasses(processElement, this.app.prefix,
            `${Enums.ComponentType.NOTICE}-process`
        );

        noticeElement.appendChild(processElement);
    }

    private calcTopOffset(index: number | undefined = undefined): number {
        let currentTop = UINotice.topOffset;
        if (this.app.notices.length > 0) {
            const step = (index === undefined ? this.app.notices.length : index) - 1;
            const lastNotice = this.app.notices[step];
            const lastNoticeElement = lastNotice.element;
            const clientRect = lastNoticeElement!.getBoundingClientRect();
            currentTop = clientRect.top + clientRect.height + UINotice.space;
        }

        return currentTop;
    }

    private bindEvent(noticeElement: HTMLElement) {
        noticeElement.addEventListener("animationend", (ev: AnimationEvent) => {
            const element = this.element;

            if (ElementHelper.containClass(element, this.app.prefix, "animate-fade-in-right-reverse")) {
                this.remove();
            }

            if (ElementHelper.containClass(element, this.app.prefix, "animate-fade-in-right")) {
                this.processAnimate();
            }

            ElementHelper.removeClasses(element, this.app.prefix,
                "animate-fade-in-right-reverse",
                "animate-fade-in-right",
                "animate-slide-to-top"
            );
        });

        noticeElement.addEventListener("mouseenter", (ev: MouseEvent) => {
            clearInterval(this.timer);
        });

        noticeElement.addEventListener("mouseleave", (ev: MouseEvent) => {
            this.processAnimate();
        });
    }

    public destroy(): void {
        ElementHelper.addClasses(this.element, this.app.prefix,
            "animate-fade-in-right-reverse"
        );
    }

    private remove(): void {
        const index = this.app.notices.indexOf(this);
        this.app.notices.splice(index, 1);

        ElementHelper.removeElement(this.element);

        this.updateOffset(index);
    }

    private processAnimate() {
        this.timer = setInterval(() => {
            if (this.fps <= this.timeout) {
                ElementHelper.addStyles(this.processElement, <Types.CSSStyleObject>{
                    width: `${(this.fps / this.timeout) * 100}%`
                });
            }
            else {
                clearInterval(this.timer);
                this.destroy();
            }

            this.fps += 10;
        }, 10);
    }

    public updateOffset(index: number, isCreate: boolean = false): void {
        const notices = this.app.notices;
        for (let i = index; i < notices.length; i++) {
            ElementHelper.addStyles(notices[i].element, <Types.CSSStyleObject>{
                top: `${i === 0 ? UINotice.topOffset : this.calcTopOffset(i)}px`
            });

            if (!isCreate) {
                ElementHelper.addClasses(this.element, this.app.prefix,
                    "animate-slide-to-top"
                );
            }
        }
    }
}