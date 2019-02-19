import Option from "../constraints/Option"
import DefaultOptions from "./DefaultOption";
import * as ObjectHelper from "../utils/ObjectHelper";

abstract class BaseWindow {
    private readonly prefix: string = "layx";
    readonly id: string;
    readonly options: Option;

    constructor(options: Option) {
        this.options = <Option>(ObjectHelper.merge(DefaultOptions, options));
        this.id = `${this.prefix}-${this.options.id}`;
        this.init();
    }

    private init(): void {
        const fragment = document.createDocumentFragment();

        const rootElement = document.createElement("div");
        fragment.appendChild(rootElement);

        document.body.appendChild(fragment);
    }

    createToolbar(): DocumentFragment {
        const fragment = document.createDocumentFragment();
        return fragment;
    }

    createStatuBar(): DocumentFragment {
        const fragment = document.createDocumentFragment();
        return fragment;
    }

    createContent(): DocumentFragment {
        const fragment = document.createDocumentFragment();
        return fragment;
    }

    createSurface(): DocumentFragment {
        const fragment = document.createDocumentFragment();
        return fragment;
    }
}

export default BaseWindow;