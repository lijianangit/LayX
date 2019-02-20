import Container from "./components/Container";
import { ContainerOptions } from "./types/Constraint";

const containerOptions: ContainerOptions = { id: "hello", background: "#dedede" };
const container = new Container(containerOptions);
const fragment = container.createView(container);

document.body.appendChild(fragment);