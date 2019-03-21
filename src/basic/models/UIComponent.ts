import App from "../../core/App";
import * as Types from "../../../types";
import * as CastHelper from "../../utils/CastHelper";

export default abstract class UIComponent {
    private state: any;
    public readonly components: Types.Component = <Types.Component>{};

    constructor(public readonly app: App) {
    }

    setComponent(key: string, component: UIComponent | Array<UIComponent>): void {
        key = CastHelper.stringCast(key);
        if (!this.components[key]) {
            this.components[key] = component;
        }
    }

    getComponent<T extends UIComponent | Array<UIComponent>>(key: string, component: UIComponent = this): T | null {
        key = CastHelper.stringCast(key);
        if (key.indexOf("->") > -1) {
            const keys = key.split("->");
            // toolBar->actionBar
            let tier = component.getComponent(keys[0]);
            if (tier === null) return null;
            for (let i = 0; i < keys.length; i++) {
                if (i + 1 < keys.length) {
                    tier = (<UIComponent>tier).getComponent(keys[i + 1], (<UIComponent>tier));
                }
                else return tier as T;
            }
            return tier as T;
        }
        else {
            if (component.components[key]) {
                return component.components[key] as T;
            }
            return null;
        }
    }

    removeComponent(key: string) {
        key = CastHelper.stringCast(key);
        if (this.components[key]) {
            delete this.components[key];
        }
    }
}