import { EventBus } from '../core/event-bus';
import { readObject } from '../core/helper/object';
import { JSONObject } from '../core/type';
import { Entry } from '../entry';
import { MonitorCenter } from '../monitor';
import { BuiltInComponent } from '../type';

export abstract class Component<TOption extends JSONObject> {
    private __NAME__: any;
    protected entry: Entry = Entry.Instance();
    protected eventBus: EventBus = EventBus.Instance();
    protected monitorCenter: MonitorCenter = MonitorCenter.Instance();

    public _components: BuiltInComponent = {};
    public get components(): BuiltInComponent {
        return this._components;
    }

    protected _element: HTMLDivElement | null = null;
    public get element(): HTMLDivElement | null {
        return this._element;
    }

    public constructor(protected options: TOption) { }

    protected readGlobalValue(path: string, defaultValue: any = null, startObject = this.entry): any {
        return readObject<any>(path, defaultValue, startObject);
    }

    protected readOptions(keyValue: JSONObject): void {
        for (const key in keyValue) {
            if (key.indexOf(":") === -1) {
                (<any>this)[key] = readObject(key, keyValue[key], this.options);
                continue;
            }
            const keyPath = key.split(":");
            (<any>this)[keyPath[0]] = readObject(keyPath[1], keyValue[key], this.options);
        }
    }

    public readComponent<T extends Component<JSONObject>>(path: string, startObject: Component<JSONObject> = this): T | null {
        return readObject<T | null>(path, null, startObject, "components");
    }
}