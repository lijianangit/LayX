import { EntryOvert, GlobalOption } from "./app/entry/constraint";
import Entry from "./app/entry/entry";

/**
 * 对外公开方法
 */
function overt(): EntryOvert {
    const entryOvert = <EntryOvert>function (options: GlobalOption): void {
        Entry.getInstance(options);
    };

    const entry = Entry.getInstance();
    entryOvert.version = entry.version;

    return entryOvert;
}

export default overt();