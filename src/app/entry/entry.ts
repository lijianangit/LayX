import { GlobalOption } from "./constraint";
import { SupportLanguage } from "./enum";
import { options } from "../core/validator/property-validator";

export default class Entry {
    /**
     * 版本号
     */
    public readonly version: string = "3.0.0";

    /**
     * 默认语言
     */
    @options(SupportLanguage.ZH_CN, SupportLanguage.EN_US)
    public lang: SupportLanguage = SupportLanguage.ZH_CN;

    /**
     * 私有化构造函数，实现单例
     */
    private constructor(options: GlobalOption) {
        this.handlerOptions(options);
    }

    /**
     * 静态实例变量
     */
    private static instance: Entry;

    /**
     * 获取唯一可用对象
     */
    public static getInstance(options: GlobalOption = <GlobalOption>{}): Entry {
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
    private handlerOptions(options: GlobalOption) {
        this.lang = options.lang || SupportLanguage.ZH_CN;
    }
}