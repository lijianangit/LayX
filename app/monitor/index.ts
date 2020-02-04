import { UIWindow } from '../component/ui-window';
import { WINDOW_CREATE, WINDOW_DESTROY, WINDOW_EXIST, WINDOW_FOCUS } from '../const';
import { EventBus } from '../core/event-bus';
import { removeHTMLElement } from '../core/helper/element';
import { arrayRemove, arraySetToFirst } from '../core/helper/object';
import { EventMessage } from '../core/type';
import { WindowEventMessage } from '../type';

export class MonitorCenter {
    private static instance: MonitorCenter;

    private eventBus: EventBus = EventBus.Instance();
    private _windows: Array<UIWindow> = [];
    get windows(): Array<UIWindow> {
        return this._windows;
    }

    private _window: UIWindow | null = null;
    get window(): UIWindow | null {
        return this._window;
    }

    public static Instance(): MonitorCenter {
        return this.instance = this.instance ?? new MonitorCenter();
    }

    private constructor() {
        this.eventBus.on(WINDOW_CREATE, (message: EventMessage<WindowEventMessage>) => {
            this._windows.unshift(message.dataset.target);
        });

        this.eventBus.on(WINDOW_FOCUS, (message: EventMessage<WindowEventMessage>) => {
            const window = message.dataset.target;
            const isCreated = message.dataset?.created ?? false;
            if (isCreated) {
                this._window = window;
                return;
            };
            window.updateZIndex();
            this._window = window;
            arraySetToFirst(this._windows, window);
        });

        this.eventBus.on(WINDOW_EXIST, (message: EventMessage<WindowEventMessage>) => {
            const window = message.dataset.target;
            window.attracting();
        });

        this.eventBus.on(WINDOW_DESTROY, (message: EventMessage<WindowEventMessage>) => {
            const window = message.dataset.target;
            removeHTMLElement(window.element);
            arrayRemove(this._windows, window);
            this._windows.length > 0 && this._windows[0].updateZIndex();
        });
    }
}