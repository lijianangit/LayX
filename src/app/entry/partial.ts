import Entry from "./"
import { EntryOption } from "./type";
import { SupportLanguage } from "./const";

/**
 * 处理初始传入参数
 * @param options 控件支持传入可选参数
 * @returns void
 */
export function handlerOptions(this: Entry, options: EntryOption): void {
    this.lang = options?.lang ?? SupportLanguage.ZH_CN;
    this.width = options?.width ?? this.width;
    this.height = options?.height ?? this.height;
    this.zIndex = options?.zIndex ?? this.zIndex;
    this.backgroundColor = options?.backgroundColor ?? this.backgroundColor;
}