import UIComponent from "../models/UIComponent";
import * as Types from "../../../types";

export default interface UIControl extends UIComponent {
    kind: string;
    components: Types.Component;
    present(): DocumentFragment | null;
}