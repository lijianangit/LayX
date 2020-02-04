import { Entry } from './entry';
import { EntryOption, Overt } from './type';

export default (function overt(): Overt {
    const entry = Entry.Instance();
    const overt = <Overt>function (options: EntryOption) {
        Entry.Instance(options);
    };
    overt.version = entry.version;
    Object.defineProperties(overt, {
        window: { get: () => entry.window },
        windows: { get: () => entry.windows }
    });

    overt.on = entry.on.bind(entry);
    overt.open = entry.open.bind(entry);
    overt.getWindow = entry.getWindow.bind(entry);

    return overt;
})();
