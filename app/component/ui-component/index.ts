
import { Component } from '../';
import { JSONObject } from '../../core/type';
import { ComponentElement } from '../../type';

export interface UIComponent<TOption extends JSONObject> extends Component<TOption> {
    createView(): ComponentElement;
}