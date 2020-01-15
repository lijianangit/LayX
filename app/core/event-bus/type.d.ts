export interface EventHandler {
    (message: any): void;
}
export interface MessageQueues {
    [key: string]: EventHandler | Array<EventHandler>;
}
export interface EventSetter {
    [eventKey: string]: EventHandler;
}