import { ConfigOptions, WindowOptions } from "../../../types";
import UIWindow from "../../controls/UIWindow";

export default interface Layx {
    v: string;
    (options: ConfigOptions): void;
    create(options: WindowOptions): void;
    windows: Array<UIWindow>;
    window: UIWindow | null;
    getWindow(id: string): UIWindow | null;
}
