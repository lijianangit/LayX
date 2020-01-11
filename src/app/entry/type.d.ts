import { UIWindowOption } from '../component/ui-window/type';
import EventBus from '../core/event-bus';
import { EventSetter, MessageQueues } from '../core/event-bus/type';
import { SupportLanguage } from './const';
import { TitleBarOption } from "../component/ui-tool-bar/type";

/**
 * 工具栏默认配置
 */
export interface ToolBarDefault {
    /**
     * 默认高度
     */
    height?: number;

    /**
     * 默认背景颜色
     */
    backgroundColor?: string;

    /**
     * 标题栏
     */
    titleBar?: false | TitleBarOption;
}

/**
 * 窗口默认配置
 */
export interface WindowDefault {
    /**
     * 默认窗口宽度
     */
    width?: number;

    /**
     * 默认窗口高度
     */
    height?: number;

    /**
     * 默认背景颜色
     */
    backgroundColor?: string;

    /**
     * 工具栏默认配置
     */
    toolBar?: false | ToolBarDefault;
}

/**
 * 入口配置选项
 */
export interface EntryOption {
    /**
     * 支持语言
     */
    lang?: SupportLanguage;

    /**
     * 起始层数
     */
    startZIndex: number;

    /**
     * window 默认配置
     */
    window?: WindowDefault;
}

/**
 * 程序对外接口
 */
export interface EntryOvert {
    /**
     * 版本号
     */
    version: string;

    /**
     * 全局配置
     */
    (options: EntryOption): void;

    /**
     * 监听事件
     */
    on(queues: EventSetter): void;

    /**
     * 打开新窗口
     * @param options 窗口参数
     */
    open(options: UIWindowOption): void;
}