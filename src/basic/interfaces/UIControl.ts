import UIComponent from "../models/UIComponent";

export default interface UIControl extends UIComponent {
    kind: string;
    present(): DocumentFragment;
}