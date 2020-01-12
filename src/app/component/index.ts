import { EventBus } from '../core/event-bus';
import { JSONObject } from '../core/helper/type';
import { Entry } from '../entry';

/**
 * 组件类，所有的组件都必须继承该类
 * @template TOption 组件参数
 */
export abstract class Component<TOption> {
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

    /**
     * 计算多层嵌套中类型属性值
     * @param key 路径，格式：window/toolBar/size
     * @param defaultValue 默认值
     * @param [starObject] 起始对象
     * @returns any 
     */
    fromJSONPath(key: string, defaultValue: any, starObject: JSONObject = this.entry): any {
        if (key.indexOf("/") > -1) {
            const keys = key.split("/");
            let tier = this.fromJSONPath(keys[0], defaultValue);
            if (!tier) return defaultValue;
            for (let i = 0; i < keys.length; i++) {
                if (i + 1 < keys.length) {
                    tier = this.fromJSONPath(keys[i + 1], defaultValue, tier);
                }
                else return tier;
            }
            return tier;
        }
        else return starObject[key] ?? defaultValue;
    }
}