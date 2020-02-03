import '../asset';

import { UIWindow } from '../component/ui-window';
import { AnimationOptional, BorderStyleOptional, WINDOW_CREATE } from '../const';
import { GlobalUIWindowOptionContract } from '../contract';
import { validator } from '../core/decorator/property';
import { EventBus } from '../core/event-bus';
import { parameterInvalid } from '../core/exception';
import { EventSetter } from '../core/type';
import {
    checkFunction, checkJSONObject, checkMin, checkNoEmptyOrNull, checkPstInt
} from '../core/validator';
import {
    EntryOption, EventMessage, GlobalUIWindowOption, UIWindowOption, WindowEventMessage
} from '../type';

export class Entry {
    private constructor(options: EntryOption) {
        this.handlerOptions(options);
        this.monitorEvent();
    }

    private static instance: Entry;

    private eventBus: EventBus = EventBus.Instance();

    public readonly version: string = "3.0";

    @validator(checkPstInt, [checkMin, 1000])
    public startZIndex: number = 10000000;

    @validator(GlobalUIWindowOptionContract)
    public window: GlobalUIWindowOption = {
        width: 800,
        height: 600,
        minWidth: 200,
        minHeight: 200,
        maxWidth: innerWidth,
        maxHeight: innerHeight,
        backgroundColor: "#ffffff",
        boxShadow: true,
        animate: AnimationOptional.ZOOM,
        border: {
            width: 1,
            style: BorderStyleOptional.SOLID,
            color: "#3baced",
            radius: 4
        }
    };

    private _zIndex: number = this.startZIndex;
    get zIndex() {
        return this._zIndex = this._zIndex + 2;
    }

    private _windows: Array<UIWindow> = [];
    get windows(): Array<UIWindow> {
        return this._windows;
    }

    public static Instance(options: EntryOption = {}): Entry {
        if (!this.instance) this.instance = new Entry(options);
        else this.instance.handlerOptions(options);
        return this.instance;
    }

    private handlerOptions(options: EntryOption): void {
        this.startZIndex = options?.startZIndex ?? this.startZIndex;
        this.window = options?.window ?? this.window;
    }

    private monitorEvent(): void {
        this.eventBus.on(WINDOW_CREATE, (message: EventMessage<WindowEventMessage>) => {
            this._windows.push(message.dataset.target);
        });
    }

    public on(eventSetter: EventSetter): void {
        if (!checkJSONObject(eventSetter)) return;

        for (const key in eventSetter) {
            const handler = eventSetter[key];
            if (checkFunction(handler)) {
                this.eventBus.on(key, handler);
            }
        }
    }

    public open(options: UIWindowOption): void {
        if (!checkNoEmptyOrNull(options?.id)) parameterInvalid();
        if (this.getWindow(options.id)) parameterInvalid(`: Window ID '${options.id}' already exists`);

        const fragment = document.createDocumentFragment();
        const uiWindow = new UIWindow(options);
        const uiWindowElement = uiWindow.createView();
        fragment.appendChild(uiWindowElement);
        document.body.appendChild(uiWindowElement);
    }

    public getWindow(id: string): UIWindow | null {
        if (!checkNoEmptyOrNull(id)) parameterInvalid();

        const searchs = this._windows.filter(win => {
            return win.id === id;
        });
        return searchs.length > 0 ? searchs[0] : null;
    }
}