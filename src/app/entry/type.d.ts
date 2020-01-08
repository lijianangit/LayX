import { SupportLanguage } from "./const";
import { UIWindowOption } from "../component/ui-window/type";

/**
 * 入口配置选项
 */
export interface EntryOption {
    /**
     * 支持语言
     */
    lang?: SupportLanguage;

    /**
     * 默认窗口宽度
     */
    width?: number;

    /**
     * 默认窗口高度
     */
    height?: number;
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
     * 打开新窗口
     * @param options 窗口参数
     */
    open(options: UIWindowOption): void;
}