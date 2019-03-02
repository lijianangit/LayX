import { ConfigOptions, WindowOptions } from "../../../types";

export default interface Layx {
    v: string;
    (options: ConfigOptions): void;
    create(options: WindowOptions): void;
}
