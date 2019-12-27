import Control from "./Control";

function app(name: string) {
    var control = new Control(name);
    return control.name;
}

export default app;