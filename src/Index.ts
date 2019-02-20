import Container from "./components/Container";

const container = new Container(<ContainerOptions>{ id: "hello" });
const fragment = container.createView(container);

document.body.appendChild(fragment);