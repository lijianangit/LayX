import { DEFAULT_START_ZINDEX, DEFAULT_WINDOW_OPTION, TextAlign, VERSION } from '../const';
import { validator } from '../core/decorator/property';
import {
    checkColor, checkContains, checkIn, checkMin, checkPstInt, checkPstNumber, checkString
} from '../core/validator';
import { EntryOption, EntryUIWindowOption } from './type';

export class Entry {
    private constructor(options: EntryOption) {
        this.handlerOptions(options);
    }

    private handlerOptions(options: EntryOption): void {
        this.startZIndex = options?.startZIndex ?? this.startZIndex;
        this.window = options?.window ?? this.window;
    }

    private static instance: Entry;

    public readonly version: string = VERSION;
    @validator(checkPstInt, [checkMin, 1000])
    public startZIndex: number = DEFAULT_START_ZINDEX;
    @validator({
        width: checkPstNumber, height: checkPstNumber, backgroundColor: checkColor,
        toolBar: [{
            height: checkPstNumber, backgroundColor: checkColor,
            titleBar: [{ label: checkString, color: checkColor, align: [checkIn, TextAlign.LEFT, TextAlign.CENTER, TextAlign.RIGHT], fontSize: checkPstInt }, false],
            icon: [{ name: [checkString, null], color: [checkColor, null], size: checkPstInt, path: [checkString, null] }, false]
        }, false]
    })
    public window: EntryUIWindowOption = DEFAULT_WINDOW_OPTION;

    public static Instance(options: EntryOption = {}): Entry {
        if (!this.instance) this.instance = new Entry(options);
        else this.instance.handlerOptions(options);
        return this.instance;
    }
}