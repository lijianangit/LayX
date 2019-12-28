import { SupportLanguage } from "./enum";
import { UIWindowOption } from "../control/window/constraint";

/**
 * 全局配置选项
 */
export interface GlobalOption {
    /**
     * 支持语言
     */
    lang: SupportLanguage;
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
    (options: GlobalOption): void;

    /**
     * 打开新窗口
     * @param options 可选参数
     */
    open(options: UIWindowOption): HTMLElement;
}