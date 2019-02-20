import Container from "./components/Container";
import { ContainerOptions, Layx } from "./types/Constraint";

function layxInstance(): Layx {
    const layx = <Layx>function (options: any): void { };
    layx.zIndex = 10000000;

    const containerOptions: ContainerOptions = { id: "hello", background: "#dedede" };
    const container = new Container(containerOptions);

    layx.create = function (options: any) {
        const containerFragment = container.createView();
        document.body.appendChild(containerFragment);
    };
    return layx;
}

const layx = layxInstance();
export default layx;