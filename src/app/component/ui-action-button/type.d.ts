/**
 * 操作按钮可选参数
 */
export interface UIActionButtonOption {
    /**
     * 名称
     */
    name: string;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 响应处理函数
     */
    handler?: (ev: MouseEvent) => void;
}