import Container from "./components/Container";
import { ContainerOptions, ToolBarOptions } from "./types/Constraint";

const containerOptions: ContainerOptions = { id: "hello", background: "#dedede"};
const container = new Container(containerOptions);
const containerFragment = container.createView();

document.body.appendChild(containerFragment);