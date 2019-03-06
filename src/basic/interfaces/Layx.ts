import UIWindow from "../../controls/UIWindow";
import * as Types from "../../../types";

export default interface Layx {
    v: string;
    (options: Types.ConfigOptions): void;
    create(options: Types.WindowOptions): void;
    windows: Array<UIWindow>;
    window: UIWindow | null;
    getWindow(id: string): UIWindow | null;
}
