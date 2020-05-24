export function invalidParameter(message: string = "Invalid parameter."): never {
    throw new Error(message);
}