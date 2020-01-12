import { UIICon } from '.';
import { UIIconOption } from './type';

/**
 * 处理初始传入参数
 * @param options 可选参数
 * @returns void
 */
export function handlerOptions(this: UIICon, options: UIIconOption): void {
    this.name = options?.name ?? this.name;
    this.color = options?.color ?? this.color;
    this.size = options?.size ?? this.size;
}