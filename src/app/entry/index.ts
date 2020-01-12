import '../asset/icon';
import '../asset/style';

import { DEFAULT_ICON, DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../component/ui-icon/const';
import { UIIconOption } from '../component/ui-icon/type';
import { Align } from '../component/ui-tool-bar/const';
import { TitleBarOption } from '../component/ui-tool-bar/type';
import UIWindow from '../component/ui-window';
import { UIWindowOption } from '../component/ui-window/type';
import { combine, inValueOptions, isNoEmptyOrNull, isPstInt, min } from '../core/decorator/property-decorator';
import EventBus from '../core/event-bus';
import { EventSetter } from '../core/event-bus/type';
import { checkColor, checkNoEmptyOrNull, checkOfType, checkPstInt, checkPstNumber, checkString } from '../core/validator';
import {
    DEFAULT_TITLEBAR_ALIGN,
    DEFAULT_TITLEBAR_COLOR,
    DEFAULT_TITLEBAR_FONTSIZE,
    DEFAULT_TITLEBAR_LABEL,
    DEFAULT_TOOLBAR_BACKGROUND_COLOR,
    DEFAULT_TOOLBAR_HEIGHT,
    DEFAULT_WINDOW_BACKGROUND_COLOR,
    DEFAULT_WINDOW_HEIGHT,
    DEFAULT_WINDOW_WIDTH,
    PREFIX,
    START_ZINDEX,
    SupportLanguage,
    VERSION,
} from './const';
import { handlerOptions } from './partial';
import { EntryOption, ToolBarDefault, WindowDefault } from './type';

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
     * 起始层数,不能小于1000
     */
    @isPstInt()
    @min(1000)
    public startZIndex: number = START_ZINDEX;

    /**
     * 前缀符
     */
    @isNoEmptyOrNull()
    public readonly prefix: string = PREFIX;

    /**
     * 默认语言
     */
    @inValueOptions(SupportLanguage.ZH_CN, SupportLanguage.EN_US)
    public lang: SupportLanguage = SupportLanguage.ZH_CN;

    /**
     * 窗口默认配置
     */
    @combine({
        width: checkPstNumber,
        height: checkPstNumber,
        backgroundColor: checkColor,
        toolBar: {
            decorator: {
                height: checkPstNumber,
                backgroundColor: checkColor,
                titleBar: {
                    decorator: {
                        label: checkString,
                        color: checkColor,
                        align: [Align.LEFT, Align.CENTER, Align.RIGHT],
                        fontSize: checkPstInt
                    },
                    options: [false]
                },
                icon: {
                    decorator: {
                        name: checkNoEmptyOrNull,
                        size: checkPstInt,
                        color: checkColor
                    },
                    options: [false]
                }
            },
            options: [false]
        }
    })
    public window: WindowDefault = <WindowDefault>{
        width: DEFAULT_WINDOW_WIDTH, // 默认宽度
        height: DEFAULT_WINDOW_HEIGHT,  // 默认高度
        backgroundColor: DEFAULT_WINDOW_BACKGROUND_COLOR,    //默认背景颜色
        toolBar: <ToolBarDefault | false>{
            height: DEFAULT_TOOLBAR_HEIGHT, // 默认工具栏高度
            backgroundColor: DEFAULT_TOOLBAR_BACKGROUND_COLOR, // 默认工具栏背景颜色
            titleBar: <TitleBarOption | false>{
                label: DEFAULT_TITLEBAR_LABEL,  // 默认标题栏文本
                color: DEFAULT_TITLEBAR_COLOR, // 默认标题栏颜色
                align: DEFAULT_TITLEBAR_ALIGN, // 默认标题栏对齐方式
                fontSize: DEFAULT_TITLEBAR_FONTSIZE // 默认标题栏字体大小
            },
            icon: <UIIconOption | false>{
                name: DEFAULT_ICON, // 默认图标名称
                size: DEFAULT_ICON_SIZE, // 默认图标大小
                color: DEFAULT_ICON_COLOR // 默认图标颜色
            }
        }
    };

    /**
     * 当前层级数
     */
    private _zIndex: number = this.startZIndex;
    get zIndex() {
        return this._zIndex = this._zIndex + 2;
    }

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