import { Comparison, Comp } from "../../types+.ts";
import { $Test, EQ$, EQ } from "../../test+.ts";

import { selectionSort } from "../../../import.ts";

$Test(selectionSortTest, import.meta.url);
function selectionSortTest() {
    const input = [10, 2, 3, 5, 1, 4, 9, 6, 8, 7];
    const output =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    selectionSort(input);
    EQ(input, output);
}

$Test(genericSelectionSortTest, import.meta.url);
function genericSelectionSortTest() {
    class Sortable implements Comp<Sortable> {
        private i: number;
        constructor(v: number) {
            this.i = v;
        }
        compateTo(other: Sortable): Comparison {
            if (this.i < other.i) return -1;
            if (this.i > other.i) return 1;
            if (this.i === other.i) return 0;
            throw new Error("INVALID STATE");
        }
    }

    const input = [new Sortable(3), new Sortable(1), new Sortable(2)];
    const output =[new Sortable(1), new Sortable(2), new Sortable(3)];
    selectionSort(input);
    EQ$<Sortable>(input, output, (l,r) => l.compateTo(r) == 0);
}