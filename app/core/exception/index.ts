export function parameterInvalid(message: string = ""): never {
    throw new Error(`Invalid parameter${message}.`);
}
