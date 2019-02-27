import UIComponent from "../UIComponent";

export default interface UIControl extends UIComponent {
    present(): DocumentFragment;
}