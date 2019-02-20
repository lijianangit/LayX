import Container from "./Container";

export default interface Component {
    createView(container: Container): DocumentFragment;
}