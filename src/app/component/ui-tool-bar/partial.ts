import UIToolBar from './';
import { UIToolBarOption } from './type';

/**
 * 处理初始传入参数
 * @param options 可选参数
 * @returns void
 */
export function handlerOptions(this: UIToolBar, options: UIToolBarOption): void {
    this.height = options?.height ?? this.height;
    this.backgroundColor = options?.backgroundColor ?? this.backgroundColor;
}