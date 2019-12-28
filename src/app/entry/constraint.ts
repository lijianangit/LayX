import { SupportLanguage } from "./enum"

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
}