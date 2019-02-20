export default interface Component {
    readonly name: string;
    createView(): DocumentFragment;
}