import { EntryOption } from "./type";
import { SupportLanguage } from "./enum";
import { isPstNumber, inValueOptions } from "../core/decorator/property-decorator";
import { UIWindowOption } from "../component/ui-window/type";
import UIWindow from "../component/ui-window";

import "../asset/style";

/**
 * 入口单例类，承载着全局数据存储
 */
export default class Entry {
    /**
     * 前缀符
     */
    public readonly prefix: string = "layx-";

    /**
     * 版本号
     */
    public readonly version: string = "3.0.0";

    /**
     * 默认语言
     */
    @inValueOptions(SupportLanguage.ZH_CN, SupportLanguage.EN_US)
    public lang: SupportLanguage = SupportLanguage.ZH_CN;

    /**
     * 默认窗口初始化宽度
     */
    @isPstNumber()
    public width: number = 800;

    /**
     * 默认窗口初始化高度
     */
    @isPstNumber()
    public height: number = 600;

    /**
     * 私有化构造函数，实现单例
     */
    private constructor(options: EntryOption) {
        this.handlerOptions(options);
    }

    /**
     * 打开新窗口
     * @param options 可选参数
     */
    open(options: UIWindowOption): void {
        const uiWindow = new UIWindow(options);
        const uiWindowElement = uiWindow.present();
        const fragment = document.createDocumentFragment();
        fragment.appendChild(uiWindowElement);

        document.body.appendChild(uiWindowElement);
    }

    /**
     * 静态实例变量
     */
    private static instance: Entry;

    /**
     * 获取唯一可用对象
     */
    public static getInstance(options: EntryOption = <EntryOption>{}): Entry {
        if (!this.instance) {
            this.instance = new Entry(options);
        }
        else {
            this.instance.handlerOptions(options);
        }
        return this.instance;
    }

    /**
     * 处理传入参数
     * @param options 入口参数
     */
    private handlerOptions(options: EntryOption) {
        this.lang = options?.lang ?? SupportLanguage.ZH_CN;
        this.width = options?.width ?? this.width;
        this.height = options?.height ?? this.height;
    }
}