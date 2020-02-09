import '../asset';

import { UIWindow } from '../component/ui-window';
import {
    AlignOptional, AnimationOptional, BorderStyleOptional, WINDOW_CREATE, WINDOW_DESTROY,
    WINDOW_EXIST, WINDOW_FOCUS, WINDOW_MAXIMIZE, WINDOW_MINIMIZE, WINDOW_RESTORE
} from '../const';
import { GlobalUIWindowOptionContract } from '../contract';
import { validator } from '../core/decorator/property';
import { EventBus } from '../core/event-bus';
import { parameterInvalid } from '../core/exception';
import { EventSetter } from '../core/type';
import {
    checkFunction, checkJSONObject, checkMin, checkNoEmptyOrNull, checkPstInt
} from '../core/validator';
import { MonitorCenter } from '../monitor';
import {
    BorderOption, BoxShadowOption, EntryOption, GlobalUIWindowOption, UIActionBarOption,
    UIIconOption, UIWindowOption, WindowEventMessage
} from '../type';

export class Entry {
    private static instance: Entry;
    private monitorCenter: MonitorCenter = MonitorCenter.Instance();
    private eventBus: EventBus = EventBus.Instance();

    private constructor(options: EntryOption) {
        this.handlerOptions(options);
    }

    public readonly version: string = "3.0";

    @validator(checkPstInt, [checkMin, 1000])
    public startZIndex: number = 10000000;

    @validator(GlobalUIWindowOptionContract)
    public windowOption: GlobalUIWindowOption = {
        width: 800,
        height: 600,
        minWidth: 200,
        minHeight: 200,
        maxWidth: innerWidth,
        maxHeight: innerHeight,
        backgroundColor: "#ffffff",
        boxShadow: {
            offsetX: 1,
            offsetY: 1,
            blurRadius: 12,
            spreadRadius: 1,
            color: "rgba(0, 0, 0, 0.2)"
        },
        animate: AnimationOptional.ZOOM,
        border: {
            width: 1,
            style: BorderStyleOptional.SOLID,
            color: "#d5d5d5",
            radius: 4
        },
        actionBar: <UIActionBarOption>{
            height: 30,
            align: AlignOptional.RIGHT,
            color: "#000000",
            actionHoverClasses: "action-button-hover"
        }
    };

    private _zIndex: number = this.startZIndex;
    get zIndex() {
        return this._zIndex = this._zIndex + 2;
    }

    public static Instance(options: EntryOption = {}): Entry {
        if (!this.instance) this.instance = new Entry(options);
        else {
            if (Object.keys(options).length > 0) {
                this.instance.handlerOptions(options);
            }
        };
        return this.instance;
    }

    private handlerOptions(options: EntryOption): void {
        this.startZIndex = options?.startZIndex ?? this.startZIndex;
        if (options?.startZIndex) this._zIndex = this.startZIndex;
        this.windowOption = options?.windowOption ?? this.windowOption;
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

        const window = this.getWindow(options.id);
        if (window) {
            this.eventBus.broadcast([WINDOW_FOCUS, WINDOW_EXIST], <WindowEventMessage>{
                target: window
            });
            return;
        }

        const fragment = document.createDocumentFragment();
        const uiWindow = new UIWindow(options);
        const uiWindowElement = uiWindow.createView();
        fragment.appendChild(uiWindowElement);
        document.body.appendChild(uiWindowElement);

        this.eventBus.broadcast([WINDOW_CREATE, WINDOW_FOCUS], <WindowEventMessage>{
            target: uiWindow,
            created: true
        });
    }

    public getWindow(id: string): UIWindow | null {
        if (!checkNoEmptyOrNull(id)) parameterInvalid();

        const searchs = this.monitorCenter.windows.filter(win => {
            return win.id === id;
        });
        return searchs.length > 0 ? searchs[0] : null;
    }

    private triggerWindowOperator(id: string, eventKey: string): void {
        if (!checkNoEmptyOrNull(id)) parameterInvalid();
        const window = this.getWindow(id);
        if (!window) return;

        this.eventBus.broadcast([eventKey], <WindowEventMessage>{
            target: window
        });
    }

    public destroy(id: string): void {
        this.triggerWindowOperator(id, WINDOW_DESTROY);
    }

    public maximize(id: string): void {
        this.triggerWindowOperator(id, WINDOW_MAXIMIZE);
    }

    public focus(id: string): void {
        this.triggerWindowOperator(id, WINDOW_FOCUS);
    }

    public restore(id: string): void {
        this.triggerWindowOperator(id, WINDOW_RESTORE);
    }
}