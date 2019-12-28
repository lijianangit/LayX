import { EntryOvert, GlobalOption } from "./app/entry/constraint";
import Entry from "./app/entry/entry";

/**
 * 对外公开方法
 */
function overt(): EntryOvert {
    const entry = Entry.getInstance();

    const entryOvert = <EntryOvert>function (options: GlobalOption): void {
        Entry.getInstance(options);
    };

    entryOvert.version = entry.version;
    entryOvert.open = entry.open;

    return entryOvert;
}

export default overt();