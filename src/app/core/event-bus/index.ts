import { checkArray, checkOfType } from '../validator';
import { EventHandler, MessageQueues } from './type';

/**
 * 事件总线类
 */
export class EventBus {
    /**
     * 私有化构造函数，实现单例
     */
    private constructor() {
    }

    /**
     * 消息队列
     */
    private messageQueues: MessageQueues = <MessageQueues>{};

    /**
     * 绑定事件
     * @param eventKey 事件名称
     * @param eventHandler 事件处理函数或函数数组
     * @returns void
     */
    public on(eventKey: string, eventHandler: EventHandler): void {
        if (this.messageQueues.hasOwnProperty(eventKey)) {
            const eventValue = this.messageQueues[eventKey];
            if (checkOfType(eventValue, "function")) {
                this.messageQueues[eventKey] = [<EventHandler>eventValue, eventHandler];
            }
            else if (checkArray(eventValue)) {
                this.messageQueues[eventKey] = [...<Array<EventHandler>>eventValue, eventHandler];
            }
        }
        else {
            this.messageQueues[eventKey] = eventHandler;
        }
    }

    /**
     * 只绑定一次
     * @param eventKey 事件名称
     * @param eventHandler 事件处理函数或函数数组
     * @returns void
     */
    public one(eventKey: string, eventHandler: EventHandler): void {
        this.messageQueues[eventKey] = eventHandler;
    }

    /**
     * 发送事件
     * @param eventKey 事件名称
     * @param message 事件处理函数或函数数组
     * @param isSync 是否同步执行，默认false
     * @returns void 
     */
    public emit(eventKey: string, message: any, isSync: boolean = false): void {
        if (!this.messageQueues.hasOwnProperty(eventKey)) return;

        const eventValue = this.messageQueues[eventKey];
        if (checkOfType(eventValue, "function")) {
            !isSync ? setTimeout(() => {
                (<EventHandler>eventValue)(message);
            }, 0) : (<EventHandler>eventValue)(message);
        }
        else if (checkArray(eventValue)) {
            (<Array<EventHandler>>eventValue).map(handler => {
                !isSync ? setTimeout(() => {
                    handler(message);
                }, 0) : handler(message);
            });
        }
    }

    /**
     * 移除事件
     * @param eventKey 事件名称
     * @returns void 
     */
    public off(eventKey: string): void {
        if (!this.messageQueues.hasOwnProperty(eventKey)) return;
        delete this.messageQueues[eventKey]
    }

    /**
     * 事件总线实例
     */
    private static instance: EventBus;

    /**
     * 获取唯一可用对象
     * @returns EventBus 
     */
    public static getInstance(): EventBus {
        if (!this.instance) {
            this.instance = new EventBus();
        }
        return this.instance;
    }
}