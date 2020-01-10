/**
 * 事件处理函数
 */
export interface EventHandler {
    (message: any): void;
}

/**
 * 消息队列属性
 */
export interface MessageQueues {
    [eventKey: string]: EventHandler | Array<EventHandler>;
}

/**
 * 事件设置
 */
export interface EventSetter {
    [eventKey: string]: EventHandler;
}