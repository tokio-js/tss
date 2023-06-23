import { Comparison, CompPrimitives, Comp } from "../../../types+.ts";
import { compare, exchange } from "../util.ts";

/**
 * A simple sorting algorithm for sorting {@link CompPrimitives primitives}
 * or {@link Comp comparable data}
 * 
 * **Complexity**: O(n²)
 * 
 * @param {(T | CompPrimitives)[]} input unsorted data **WILL BE MODIFIED**
*/
export function selectionSort<T extends Comp<T>>(input: (T | CompPrimitives)[]): void {
    const N = input.length;
    for (let i = 0; i < N; i++) {
        let min = i;
        for (let j = (i + 1); j < N; j++) {
            if (
                compare(input[j], input[min]) === Comparison.LESS
            ) min = j;
        }
        exchange(input, i, min);
    }
}
