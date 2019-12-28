/**
 * 全局控件抽象类，所有的控件都必须继承该控件类
 * @template TOption 控件支持传入可选参数
 */
export default abstract class Control<TOption> {
    /**
     * 控件唯一标识
     */
    private symbol: symbol = Symbol("monksoul");

    /**
     * 构造函数初始化
     * @param options 控件支持传入可选参数
     */
    constructor(options: TOption) {
        this.handlerOptions(options);
    }

    /**
     * 处理初始传入参数
     * @param options 控件支持传入可选参数
     */
    abstract handlerOptions(options: TOption): void;
}