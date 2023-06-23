import { UnModifiable } from "../types+.ts";

export class Modifiable<T> {
    private v: T;
    public constructor(v: T) {
        this.v = v;
    }
    public get get() {
        return this.v;
    }
    public set write(v: T) {
        this.v = v;
    }
    public asUnModifiable(): UnModifiable<T> {
        return new UnModifiable(this.get);
    }
}