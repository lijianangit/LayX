import StateStore from "./core/store/StateStore";

/**
 * Layx 对外公开接口约束
 */
export default interface Layx {
    (options: any): void;
    /**
     * 版本号
     */
    v: string;
    /**
     * 全局公共存储状态
     */
    stateStore: StateStore;

    test(): Element;
}