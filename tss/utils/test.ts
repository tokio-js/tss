// deno-lint-ignore-file no-explicit-any

import { GREEN } from "./log.ts";

function ok(data: any): void {
    const okf = console["ok" as keyof typeof console] as unknown as (data: any) => void;
    okf(data);
}

function fail(data: any): void {
    const failf = console["fail" as keyof typeof console] as unknown as (data: any) => void;
    failf(data);
}

export class Test {
    private name: string;
    private file: string;
    private f: () => void;
    constructor(name: string, file: string, f: () => void) {
        this.name = name; this.file = file; this.f = f;
    }
    public run(): void {
        try {
            this.f();
            ok(`Test '\x1b[95m${this.name}${GREEN}' Passed!`)
        } catch (e) {
            fail(`Test '${this.name}' in '${this.file}' Failed!`)
            console.error(e)
        }
    }
}

export const TESTS: Test[] = [];
