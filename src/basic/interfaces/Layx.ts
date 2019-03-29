import UIWindow from "../../controls/UIWindow";
import UISalverBar from "../../controls/UISalverBar";
import * as Types from "../../../types";

export default interface Layx {
    v: string;
    (options: Types.ConfigOptions): void;
    open(options: Types.WindowOption): void;
    destroy(id: string): void;
    windows: Array<UIWindow>;
    window: UIWindow | null;
    lastWindow: UIWindow | null;
    salver: UISalverBar | null;
    getWindow(id: string): UIWindow | null;
}
