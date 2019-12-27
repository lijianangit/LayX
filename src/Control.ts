
import { isNumber, max, min, match, length } from "./app/core/validator/PropertyValidator";

export default class Control {
    // 现在的代码
    @length(3, 10)
    public name: string;

    constructor(theName: string) {
        this.name = theName;
    }
}