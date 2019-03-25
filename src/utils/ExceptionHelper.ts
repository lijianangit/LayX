export function assertId() {
    throw new Error("`id` is required.");
}

export function assertString(x: any): never {
    throw new Error("Unexpected string: " + <never>x);
}

export function assertNumber(x: any): never {
    throw new Error("Unexpected number: " + <never>x);
}

export function assertNever(x: any): never {
    throw new Error("Unexpected object: " + <never>x);
}

export function assertUnique(x: any): never {
    throw new Error("The element contains '" + <never>x + "' is exists.");
}
