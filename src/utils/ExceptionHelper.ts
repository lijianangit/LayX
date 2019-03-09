export function assertNever(x: any): never {
    throw new Error("Unexpected object: " + <never>x);
}