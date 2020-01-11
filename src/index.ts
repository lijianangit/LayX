import Entry from './app/entry';
import { EntryOption, EntryOvert } from './app/entry/type';

/**
 * 对外公开方法
 */
function overt(): EntryOvert {
    const entry = Entry.getInstance();

    const entryOvert = <EntryOvert>function (options: EntryOption): void {
        Entry.getInstance(options);
    };

    entryOvert.on = entry.on;
    entryOvert.version = entry.version;
    entryOvert.open = entry.open;

    return entryOvert;
}

export default overt();