import { parameterInvalid } from '../exception';
import { EventHandler, EventMessage, JSONObject, MessageQueues } from '../type';
import {
    checkArrayEach, checkFunction, checkJSONObject, checkNoEmptyOrNull, checkNoNullOrUndefined
} from '../validator';

export class EventBus {
    private constructor() { }

    private static instance: EventBus;
    private messageQueues: MessageQueues = {};

    public static Instance(): EventBus {
        return this.instance = this.instance ?? new EventBus();
    }

    public on(key: string, handler: EventHandler): void {
        if (!checkNoEmptyOrNull(key)) parameterInvalid();
        if (!checkFunction<EventHandler>(handler)) parameterInvalid();

        if (this.messageQueues.hasOwnProperty(key)) {
            const keyHandler = this.messageQueues[key];
            if (checkFunction<EventHandler>(keyHandler)) {
                this.messageQueues[key] = [keyHandler, handler];
            }
            else if (checkArrayEach<EventHandler>(keyHandler, checkFunction)) {
                this.messageQueues[key] = [...keyHandler, handler];
            }
        }
        else this.messageQueues[key] = handler;
    }

    public one(key: string, handler: EventHandler): void {
        if (!checkNoEmptyOrNull(key)) parameterInvalid();
        if (!checkFunction<EventHandler>(handler)) parameterInvalid();

        this.messageQueues[key] = handler;
    }

    public emit(key: string, message: any, sync: boolean = false): void {
        if (!checkNoEmptyOrNull(key)) parameterInvalid();
        if (!checkNoNullOrUndefined(message)) parameterInvalid();
        if (!this.messageQueues.hasOwnProperty(key)) return;

        const keyHandler = this.messageQueues[key];
        if (checkFunction<EventHandler>(keyHandler)) {
            sync ? keyHandler(message) :
                setTimeout(() => keyHandler(message), 0);
        }
        else if (checkArrayEach<EventHandler>(keyHandler, checkFunction)) {
            keyHandler.map(handler => {
                sync ? handler(message) :
                    setTimeout(() => handler(message), 0);
            });
        }
    }

    public off(key: string): void {
        if (!checkNoEmptyOrNull(key)) parameterInvalid();
        if (!this.messageQueues.hasOwnProperty(key)) return;
        delete this.messageQueues[key];
    }

    public broadcast<TEventMessage extends JSONObject>(keys: Array<string>, message: TEventMessage = <TEventMessage>{}): void {
        for (const key of keys) {
            this.emit(key, <EventMessage<TEventMessage>>{
                dataset: message,
                eventTarget: {
                    name: key,
                    timestamp: new Date().valueOf()
                }
            });
        }
    }
}