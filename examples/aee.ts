// Arithemtic Expression Evaluation

import { SimpleStack, Stack } from "../import.ts";

const input = `
(
    1 + (
        ( 2 + 3 ) *
        ( 5 - 10 )
    )
)
`;

function parse(input: string): number {
    function clean(input: string): string[] {
        const SPLITTER = "\r\n";
        return input.split(SPLITTER).join(' ').split(/\s+/);
    }

    const cleanInput = clean(input);

    enum Operator {
        Plus = -100,
        Minus = -200,
        Mult = -300
    }

    type Value = number;

    const OPS: Stack<Operator> = new SimpleStack<Operator>();
    const VALS: Stack<Value> = new SimpleStack<Value>();
    // const VALS: Stack<Value> = new FastStack<Int8Array>(() => new Int8Array());

    function evalStatement() {
        let res = 0;
        const v1 = VALS.pop();
        const v2 = VALS.pop();
        const op = OPS.pop();
        switch (op) {
            case Operator.Plus:
                res = (v2 + v1);
                break;
            case Operator.Minus:
                res = (v2 - v1);
                break;
            case Operator.Mult:
                res = (v2 * v1);
                break;
            default: break;
        }
        VALS.push(res);
    }

    cleanInput.forEach(s => {
        if (s === '(') return;
        if (s === ')') return evalStatement();

        if (s === '+') return OPS.push(Operator.Plus);
        if (s === '-') return OPS.push(Operator.Minus);
        if (s === '*') return OPS.push(Operator.Mult);

        const v = parseInt(s);
        if(!Number.isNaN(v)) VALS.push(v)
    });

    return VALS.pop();
}

const output = parse(input);
console.log(output);
