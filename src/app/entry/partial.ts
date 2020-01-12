import { Entry } from './';
import { SupportLanguage } from './const';
import { EntryOption, WindowDefault } from './type';

/**
 * 处理初始传入参数
 * @param options 控件支持传入可选参数
 * @returns void
 */
export function handlerOptions(this: Entry, options: EntryOption): void {
    this.lang = options?.lang ?? SupportLanguage.ZH_CN;
    this.startZIndex = options?.startZIndex ?? this.startZIndex;
    this.window = <WindowDefault>options?.window ?? this.window;
}