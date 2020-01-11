import Entry from "../entry";
import EventBus from "../core/event-bus";
import { JSONObject } from "../core/helper/type";

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
     * 事件总线对象
     */
    protected eventBus: EventBus = EventBus.getInstance();

    /**
     * 组件唯一标识
     */
    private symbol: symbol = Symbol("monksoul");

    /**
     * 处理初始传入参数
     * @param options 可选参数
     * @returns void
     */
    abstract handlerOptions(options: TOption): void;

    /**
     * 发送事件
     * @param eventName 事件名称
     * @param message 消息
     * @returns void
     */
    sendEvent(eventName: string, message: JSONObject = {}): void {
        this.eventBus.emit(eventName, {
            dataset: message,
            eventTarget: {
                name: eventName,
                timestamp: new Date().valueOf()
            }
        });
    }
}