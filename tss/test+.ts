// deno-lint-ignore-file ban-types

import { CompPrimitives } from "./types+.ts";
import { TESTS, Test } from "./utils/test.ts";

export function $Test(input: Function, importMetaUrl: string): void {
    const filename = new URL('', importMetaUrl).pathname;
    const test = new Test(input.name, filename, () => input());
    TESTS.push(test);
}

export function EQ(
    l: CompPrimitives | CompPrimitives[], r: CompPrimitives | CompPrimitives[]
): void {
    if(typeof l !== typeof r) throw new TypeError("Different Types!");
    if (Array.isArray(l) && Array.isArray(r)) {
        if (l.length != r.length) throw new RangeError("Different Lengths");
        for (let i = 0; i < r.length; i++) {
            if (l[i] != r[i]) {
                console.warn(r, "doesn't match", l);
                console.warn(r[i], "!=", l[i], ", i:", i);
                throw new Error(`${r[i]} != ${l[i]}, i: ${i}`)
            }
        }
    } else {
        if (l != r) throw new Error(`${l} != ${r}`);
    }
}

export function EQ$<T>(
    l: T | T[], r: T | T[], comp: (l: T, r: T) => boolean
): void {
    if(typeof l !== typeof r) throw new TypeError("Different Types!");
    if (Array.isArray(l) && Array.isArray(r)) {
        if (l.length != r.length) throw new RangeError("Different Lengths");
        for (let i = 0; i < r.length; i++) {
            if (!comp(l[i], r[i])) {
                console.warn(r, "doesn't match", l);
                console.warn(r[i], "!=", l[i], ", i:", i);
                throw new Error(`${r[i]} != ${l[i]}, i: ${i}`)
            }
        }
    } else {
        if (!comp(l as unknown as T, r as unknown as T)) throw new Error(`${l} != ${r}`);
    }
}
