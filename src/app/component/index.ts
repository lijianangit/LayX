import Entry from "../entry";

/**
 * 组件类，所有的组件都必须继承该类
 * @template TOption 组件参数
 */
export default abstract class Component<TOption> {
    /**
     * 入口对象
     */
    protected entry: Entry = Entry.getInstance();

    /**
     * 控件唯一标识
     */
    private symbol: symbol = Symbol("monksoul");

    /**
     * 处理初始传入参数
     * @param options 可选参数
     */
    abstract handlerOptions(options: TOption): void;
}