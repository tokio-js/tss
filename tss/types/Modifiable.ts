import { UnModifiable } from "../types+.ts";

export class Modifiable<T> {
    private v: T;
    public static from<T>(v: T): Modifiable<T> {
        return new Modifiable(v);
    }
    public static fromUnModifiable<T>(v: UnModifiable<T>): Modifiable<T> {
        return new Modifiable(v.$);
    }
    public static fromModifiable<T>(v: Modifiable<T>): Modifiable<T> {
        return new Modifiable(v.$);
    }
    public static empty<T>(): Modifiable<T> {
        return new Modifiable(undefined as unknown as T);
    }
    private constructor(v: T) {
        this.v = v;
    }
    public get $(): T {
        return this.v;
    }
    public set $(v: T) {
        this.v = v;
    }
    public asUnModifiable(): UnModifiable<T> {
        return new UnModifiable(this.$);
    }
}