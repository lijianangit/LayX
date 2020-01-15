import { Entry } from './entry';
import { EntryOption, Overt } from './entry/type';

export default (function overt(): Overt {
    const entry = Entry.Instance();
    const overt = <Overt>function (options: EntryOption) {
        Entry.Instance(options);
    };
    overt.version = entry.version;
    return overt;
})();
