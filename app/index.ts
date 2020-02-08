import { Entry } from './entry';
import { MonitorCenter } from './monitor';
import { EntryOption, Overt } from './type';

export default (function overt(): Overt {
    const entry = Entry.Instance();
    const monitorCenter = MonitorCenter.Instance();

    const overt = <Overt>function (options: EntryOption) {
        Entry.Instance(options);
    };
    overt.version = entry.version;
    Object.defineProperties(overt, {
        window: { get: () => monitorCenter.window },
        windows: { get: () => monitorCenter.windows }
    });

    overt.on = entry.on.bind(entry);
    overt.open = entry.open.bind(entry);
    overt.getWindow = entry.getWindow.bind(entry);
    overt.destroy = entry.destroy.bind(entry);
    overt.maximize = entry.maximize.bind(entry);
    overt.focus = entry.focus.bind(entry);
    overt.restore = entry.restore.bind(entry);

    return overt;
})();
