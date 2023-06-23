import { FastArray, None, Option, Some } from "../../../types+.ts";
import { Stack } from "../Stack.ts";

export class FastStack<Arr extends FastArray> implements Stack<number> {
    private inner: Arr;
    private index: number;
    constructor(builder: () => Arr) {
        this.inner = builder();
        this.index = 0;
    }
    push(value: number): void {
        this.index++;
        this.inner[this.index] = value;
    }
    isEmpty(): boolean {
        return this.index == 0;
    }
    popSafe(): Option<number> {
        if(this.isEmpty()) return None();
        return Some(this.inner[this.index--] as number);
    }
    pop(): number {
        return this.popSafe().$;
    }
}