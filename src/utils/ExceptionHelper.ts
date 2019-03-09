export function assertNever(x: any): never {
    throw new Error("Unexpected object: " + <never>x);
}
export function assertId() {
    throw new Error("`id` is required.");
}