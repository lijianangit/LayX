import ComponentProfile from "../type/ComponentProfile";

/**
 * 全局存储对象
 */
export default class StateStore {
    /**
     * 禁止实例化
     */
    private constructor() { }

    /**
     * 默认class前缀
     */
    public readonly prefix: string = "layx-";

    /**
     * 全局存储对象实例
     */
    public static get instance(): StateStore {
        const globalTop = <any>top;
        const globalKey = "_stateStore_"

        if (!globalTop[globalKey]) {
            globalTop[globalKey] = new StateStore();
        }

        return globalTop[globalKey];
    }

    /**
     * 组件信息集合
     */
    public readonly components: ComponentProfile = <ComponentProfile>{};

    /**
     * 默认起始层级
     */
    private _zIndex: number = 10000000;
    public get zIndex(): number {
        return this._zIndex++;
    }
}