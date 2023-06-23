export * from "./types/option/option.ts";
export * from "./types/result/result.ts";

export * from "./types/UnModifiable.ts";
export * from "./types/Modifiable.ts";
export * from "./types/UnInit.ts";
export * from "./types/numbers.ts";

export * from "./types/raw/Dangerous.ts";
export * from "./types/raw/Raw.ts";

/**
 * A list of all JS Primitives
*/
export type Primitives = boolean | number | string | bigint | undefined | null | symbol;

/**
 * Primitive types that can be logically compared (less/greater/eq)
*/
export type CompPrimitives = boolean | number | string | bigint;

/**
 * A simple type wrapper for **BLAZINGLY FAST** arrays
*/
export type FastArray =
    Int8Array | Uint8Array | Uint8ClampedArray |
    Int16Array | Uint16Array |
    Int32Array | Uint32Array |
    Float32Array | Float32Array |
    Float64Array | Float64Array |
    BigInt64Array | BigUint64Array;
