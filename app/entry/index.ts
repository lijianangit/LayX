import '../asset';

import { AnimationOptional, BorderStyleOptional } from '../const';
import { GlobalUIWindowOptionContract } from '../contract';
import { validator } from '../core/decorator/property';
import { checkMin, checkPstInt } from '../core/validator';
import { EntryOption, GlobalUIWindowOption } from '../type';

export class Entry {
    private constructor(options: EntryOption) {
        this.handlerOptions(options);
    }

    private static instance: Entry;

    public static Instance(options: EntryOption = {}): Entry {
        if (!this.instance) this.instance = new Entry(options);
        else this.instance.handlerOptions(options);
        return this.instance;
    }

    private handlerOptions(options: EntryOption): void {
        this.startZIndex = options?.startZIndex ?? this.startZIndex;
        this.window = options?.window ?? this.window;
    }

    public readonly version: string = "3.0";

    @validator(checkPstInt, [checkMin, 1000])
    public startZIndex: number = 10000000;

    @validator(GlobalUIWindowOptionContract)
    public window: GlobalUIWindowOption = {
        width: 800,
        height: 600,
        minWidth: 200,
        minHeight: 200,
        maxWidth: innerWidth,
        maxHeight: innerHeight,
        backgroundColor: "#ffffff",
        boxShadow: true,
        animate: AnimationOptional.ZOOM,
        border: {
            width: 1,
            style: BorderStyleOptional.SOLID,
            color: "#3baced",
            radius: 4
        }
    };
}