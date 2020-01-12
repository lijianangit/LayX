import { UIActionButton } from '.';
import { UIActionButtonOption } from './type';

/**
 * 处理初始传入参数
 * @param options 可选参数
 * @returns void
 */
export function handlerOptions(this: UIActionButton, options: UIActionButtonOption): void {
    this.disabled = options?.disabled ?? this.disabled;
    this.handler = options?.handler ?? this.handler;
}