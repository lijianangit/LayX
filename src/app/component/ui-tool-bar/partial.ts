import { UIIconOption } from '../ui-icon/type';
import { UIToolBar } from './';
import { TitleBarOption, UIToolBarOption } from './type';

/**
 * 处理初始传入参数
 * @param options 可选参数
 * @returns void
 */
export function handlerOptions(this: UIToolBar, options: UIToolBarOption): void {
    this.height = options?.height ?? this.height;
    this.backgroundColor = options?.backgroundColor ?? this.backgroundColor;
    this.titleBar = <TitleBarOption | false>options?.titleBar ?? this.titleBar;
    this.icon = <UIIconOption | false>options?.icon ?? this.icon;
}