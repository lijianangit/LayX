import { invalidParameter } from '../exception';
import { JSONObject } from '../type';
import {
    assertArray, assertArrayOf, assertFunction, assertJSONObject, assertNoEmptyOrNull
} from '../verification';

export interface ActionHandler { (additional: JSONObject): void; }
export interface ActionQueues { [type: string]: ActionHandler | Array<ActionHandler>; }
export interface ActionSetter { [type: string]: ActionHandler };
export interface ActionAdditional<AdditionalType extends JSONObject> {
    dataset: AdditionalType;
    detail: {
        type: string;
        timestamp: number;
    }
}

export class Distributor {
    private constructor() { }
    private static instance: Distributor;
    private actionQueues: ActionQueues = {};

    public static getInstance(): Distributor {
        return this.instance = this.instance ?? new Distributor();
    }

    public subscribe(type: string, handle: ActionHandler, onlyCurrent: boolean = false): void {
        if (!assertNoEmptyOrNull(type)) invalidParameter("The parameter `type` isn't non-null data.");
        if (!assertFunction<ActionHandler>(handle)) invalidParameter("The parameter `handle` isn't function type.");

        if (onlyCurrent || !this.actionQueues.hasOwnProperty(type)) {
            this.actionQueues[type] = handle;
            return;
        }

        const actionHandler = this.actionQueues[type];
        if (assertFunction<ActionHandler>(actionHandler)) {
            this.actionQueues[type] = [actionHandler, handle];
        }
        else if (assertArrayOf<ActionHandler>(assertFunction)(actionHandler)) {
            this.actionQueues[type] = [...actionHandler, handle];
        }
    }

    public dispatch<AdditionalType extends JSONObject>(type: string, additional: AdditionalType = <AdditionalType>{}, sync: boolean = false): void {
        if (!assertNoEmptyOrNull(type)) invalidParameter("The parameter `type` isn't non-null data.");
        if (!assertJSONObject(additional)) invalidParameter("The parameter `additional` isn't json data.");
        if (!this.actionQueues.hasOwnProperty(type)) return;

        const actionHandler = this.actionQueues[type];
        if (assertFunction<ActionHandler>(actionHandler)) {
            sync ?
                actionHandler(additional) :
                setTimeout(() => actionHandler(additional), 0);
        }
        else if (assertArrayOf<ActionHandler>(assertFunction)(actionHandler)) {
            actionHandler.map(handle => {
                sync ?
                    handle(additional) :
                    setTimeout(() => handle(additional), 0);
            });
        }
    }

    public unsubscribe(type: string): void {
        if (!assertNoEmptyOrNull(type)) invalidParameter("The parameter `type` isn't non-null data.");
        if (!this.actionQueues.hasOwnProperty(type)) return;

        delete this.actionQueues[type];
    }

    public broadcast<AdditionalType extends JSONObject>(type: string | Array<string>, additional: AdditionalType = <AdditionalType>{}, sync: boolean = false): void {
        if (!assertNoEmptyOrNull(type) && !assertArrayOf<string>(assertNoEmptyOrNull)(type)) invalidParameter("The parameter `type` isn't non-null string or non-null string array data.");

        const types = [...(assertArray(type) ? type : [type])];
        types.forEach(type => this.dispatch(type, additional, sync));
    }
}