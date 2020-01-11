import { EntryOption } from "./type";
import { VERSION, ZINDEX, PREFIX, DEFAULT_WINDOW_WIDTH, DEFAULT_WINDOW_HEIGHT, DEFAULT_WINDOW_BACKGROUND_COLOR, SupportLanguage } from "./const";
import { isPstNumber, inValueOptions, isPstInt, min, isColor } from "../core/decorator/property-decorator";
import { UIWindowOption } from "../component/ui-window/type";
import UIWindow from "../component/ui-window";
import { EventSetter } from "../core/event-bus/type";
import EventBus from "../core/event-bus";
import { checkOfType } from "../core/validator";
import { handlerOptions } from "./partial";

import "../asset/style";


/**
 * 入口单例类，承载着全局数据存储
 */
export default class Entry {
    /**
     * 私有化构造函数，实现单例
     */
    private constructor(options: EntryOption) {
        this.handlerOptions(options);
    }

    /**
     * 处理初始传入参数
     * @param options 可选参数
     * @returns void
     */
    handlerOptions: (options: EntryOption) => void = handlerOptions;

    /**
     * 版本号
     */
    public readonly version: string = VERSION;

    /**
     * 默认层数,不能小于1000
     */
    @isPstInt()
    @min(1000)
    public zIndex: number = ZINDEX;

    /**
     * 前缀符
     */
    public readonly prefix: string = PREFIX;

    /**
     * 默认语言
     */
    @inValueOptions(SupportLanguage.ZH_CN, SupportLanguage.EN_US)
    public lang: SupportLanguage = SupportLanguage.ZH_CN;

    /**
     * 默认窗口初始化宽度
     */
    @isPstNumber()
    public width: number = DEFAULT_WINDOW_WIDTH;

    /**
     * 默认窗口初始化高度
     */
    @isPstNumber()
    public height: number = DEFAULT_WINDOW_HEIGHT;

    /**
     * 默认背景颜色
     */
    @isColor()
    public backgroundColor: string = DEFAULT_WINDOW_BACKGROUND_COLOR;

    /**
     * 监听事件
     * @param queues 事件队列
     */
    on(queues: EventSetter = {}): void {
        for (const eventKey in queues) {
            const handler = queues[eventKey];
            if (checkOfType(handler, "function")) {
                EventBus.getInstance().on(eventKey, handler);
            }
        }
    }

    /**
     * 打开新窗口
     * @param options 窗口参数
     * @returns void
     */
    open(options: UIWindowOption): void {
        const uiWindow = new UIWindow(options);
        const uiWindowElement = uiWindow.present();
        const fragment = document.createDocumentFragment();
        fragment.appendChild(uiWindowElement);

        document.body.appendChild(uiWindowElement);
    }

    /**
     * 静态实例变量
     */
    private static instance: Entry;

    /**
     * 获取唯一可用对象
     * @param [options] 入口参数
     * @returns Entry 
     */
    public static getInstance(options: EntryOption = <EntryOption>{}): Entry {
        if (!this.instance) {
            this.instance = new Entry(options);
        }
        else {
            this.instance.handlerOptions(options);
        }
        return this.instance;
    }
}