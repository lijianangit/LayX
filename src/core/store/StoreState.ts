/**
 * 全局存储对象
 */
export default class StoreState {
    /**
     * 禁止实例化
     */
    private constructor() {
    }

    /**
     * 全局存储对象实例
     */
    public static get instance(): StoreState {
        const globalTop = <any>top;
        if (!globalTop["LayxStoreState"]) {
            globalTop["LayxStoreState"] = new StoreState();
        }

        return globalTop["LayxStoreState"];
    }

    public readonly prefix: string = "layx-";
}