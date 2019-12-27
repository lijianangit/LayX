
import { isNumber, max, min, match, length } from "./app/core/validator/ValidatorDecorator";

export default class Control {
    @length(3, 10)
    public name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}