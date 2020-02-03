import { Entry } from './entry';
import { EntryOption, Overt } from './type';

export default (function overt(): Overt {
    const entry = Entry.Instance();
    const overt = <Overt>function (options: EntryOption) {
        Entry.Instance(options);
    };
    overt.version = entry.version;
    overt.on = entry.on.bind(entry);
    overt.open = entry.open.bind(entry);
    return overt;
})();
