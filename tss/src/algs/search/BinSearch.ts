import { FastArray, Option, None, Some, Comp, CompPrimitives } from "../../../types+.ts";
import { compare } from "../util.ts";

/**
 * Searches for a given {@link key} using Binnary search.
 * 
 * **REQUIRES INPUT ARRAY TO ALREADY BE SORTED**
 * 
 * @param {(T | CompPrimitives)[]} input input array, needs to already be sorted
 * @param {T} key the key to search for
 * @returns {Option<number>} an {@link Option optional} index of the values appearance in the array
*/
export function BinSearch<T extends Comp<T>>(input: (T | CompPrimitives)[], key: T): Option<number> {
    let lo = 0;
    let hi = input.length - 1;
    while(lo <= hi) {
        const mid = lo + (hi - lo) / 2;
        const comp = compare(key, input[mid]);
        if      (comp == -1) hi = mid - 1;
        else if (comp ==  1) lo = mid + 1;
        else return Some(mid);
    }
    return None()
}

/**
 * Searches for a given number {@link key} using Binnary search.
 * Input is expcted to be a type of {@link FastArray}.
 * 
 * **REQUIRES INPUT ARRAY TO ALREADY BE SORTED**
 * 
 * @param {T} input input array, needs to already be sorted
 * @param {number} key the key to search for
 * @returns {Option<number>} an {@link Option optional} index of the values appearance in the array
*/
export function fastBinSearch<T extends FastArray>(input: T, key: number): Option<number> {
    let lo = 0;
    let hi = input.length - 1;
    while(lo <= hi) {
        const mid = lo + (hi - lo) / 2;
        if      (key < input[mid]) hi = mid - 1;
        else if (key > input[mid]) lo = mid + 1;
        else return Some(mid);
    }
    return None()
}