import { FastArray } from "../../types+.ts";

/**
 * Swaps two items in the {@link input input array}.
 * 
 * Input array can be either a `T[]` or a type of a {@link FastArray FastArray}
 * 
 * @param {T[] | Arr} input the input array **WILL BE MODIFIED**
 * @param {number} i first index to swap
 * @param {number} j second index to swap with first
*/
export function exchange<T, Arr extends FastArray>(input: T[] | Arr, i: number, j: number): void {
    const swap = input[i];
    input[i] = input[j];
    input[j] = swap;
}
