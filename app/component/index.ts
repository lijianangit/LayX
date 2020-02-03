import { EventBus } from '../core/event-bus';
import { readObject } from '../core/helper/object';
import { JSONObject } from '../core/type';
import { Entry } from '../entry';
import { EventMessage } from '../type';

export abstract class Component<TOption extends JSONObject> {
    private __NAME__: any;
    protected entry: Entry = Entry.Instance();
    protected eventBus: EventBus = EventBus.Instance();

    public constructor(protected options: TOption) { }

    protected readGlobalValue(path: string, defaultValue: any = null, startObject = this.entry): any {
        return readObject<any>(path, defaultValue, startObject);
    }

    protected readOption(path: string, defaultValue: any = null): any {
        return readObject<any>(path, defaultValue, this.options);
    }

    protected sendEvent<TEventMessage extends JSONObject>(key: string, message: TEventMessage = <TEventMessage>{}): void {
        this.eventBus.emit(key, <EventMessage<TEventMessage>>{
            dataset: message,
            eventTarget: {
                name: key,
                timestamp: new Date().valueOf()
            }
        });
    }
}