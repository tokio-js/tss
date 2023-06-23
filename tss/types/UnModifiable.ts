export class UnModifiable<T> {
    private v: T;
    public constructor(v: T) {
        this.v = v;
    }
    public get get() {
        return this.v;
    }
}