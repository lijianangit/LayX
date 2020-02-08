import { UIWindow } from '../component/ui-window';
import { WINDOW_CREATE, WINDOW_DESTROY, WINDOW_EXIST, WINDOW_FOCUS, WINDOW_MAXIMIZE, WINDOW_RESTORE } from '../const';
import { EventBus } from '../core/event-bus';
import { EventMessage } from '../core/type';
import { WindowEventMessage } from '../type';
import { PREFIX } from '../core/helper/element';

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
        document.addEventListener("DOMContentLoaded", () => {
            if (!document.body.id) {
                document.body.id = `${PREFIX}container`;
            }
        });

        this.eventBus.on(WINDOW_CREATE, (message: EventMessage<WindowEventMessage>) => {
        });

        this.eventBus.on(WINDOW_FOCUS, (message: EventMessage<WindowEventMessage>) => {
            const window = message.dataset.target;
            window.updateZIndex(message.dataset?.created ?? false);
        });

        this.eventBus.on(WINDOW_EXIST, (message: EventMessage<WindowEventMessage>) => {
            const window = message.dataset.target;
            window.attracting();
        });

        this.eventBus.on(WINDOW_MAXIMIZE, (message: EventMessage<WindowEventMessage>) => {
            const window = message.dataset.target;
            window.maximize();
        });

        this.eventBus.on(WINDOW_RESTORE, (message: EventMessage<WindowEventMessage>) => {
            const window = message.dataset.target;
            window.restore();
        });

        this.eventBus.on(WINDOW_DESTROY, (message: EventMessage<WindowEventMessage>) => {
            const window = message.dataset.target;
            window.destroy();
        });
    }

    public setWindow(window: UIWindow | null): void {
        this._window = window;
    }
}