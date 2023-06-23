import { None, Option, Some } from "../../../types+.ts";
import { Stack } from "../Stack.ts";

export class SimpleStack<T> implements Stack<T> {
    private inner: T[];
    public constructor() {
        this.inner = [];
    }
    push(value: T): void {
        this.inner.push(value);
    }
    isEmpty(): boolean {
        return this.inner.length <= 0;
    }
    popSafe(): Option<T> {
        if (this.isEmpty()) return None();
        return Some(this.inner.pop() as unknown as T);
    }
    pop(): T {
        return this.popSafe().$;
    }
}
