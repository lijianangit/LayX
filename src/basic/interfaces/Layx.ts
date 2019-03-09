import UIWindow from "../../controls/UIWindow";
import * as Types from "../../../types";

export default interface Layx {
    v: string;
    (options: Types.ConfigOptions): void;
    open(options: Types.WindowOption): void;
    destroy(id: string): void;
    windows: Array<UIWindow>;
    window: UIWindow | null;
    getWindow(id: string): UIWindow | null;
}
