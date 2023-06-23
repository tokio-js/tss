import { CompPrimitives } from "../types+.ts";

export enum Comparison {
    GREATER = 1,
    EQ = 0,
    LESS = -1
}

// deno-lint-ignore no-namespace
export namespace Comparison {
    /**
     * A dummy object used for internal type checking
    */
    const __dummy: CompPrimitives = 0;

    /**
     * Internal pure function for comparing {@link Comp comparable data}
     * and {@link CompPrimitives primitives}.
     * 
     * @param {T | CompPrimitives} l expression on the left
     * @param {T | CompPrimitives} r expression on the right
     * @returns {Comparison} comparison
    */
    export function compare<T extends Comp<T>>(l: T | CompPrimitives, r: T | CompPrimitives): Comparison {
        if (typeof l === typeof __dummy && typeof r === typeof __dummy)
            return comparePrimitives(l as unknown as CompPrimitives, r as unknown as CompPrimitives);
        return (l as unknown as T).compateTo(r as unknown as T);
    }

    /**
     * Internal pure function for **only** comparing {@link CompPrimitives primitives}.
     * 
     * @param {CompPrimitives} l expression on the left
     * @param {CompPrimitives} r expression on the left
     * @returns {Comparison} comparison
    */
    export function comparePrimitives(l: CompPrimitives, r: CompPrimitives): Comparison {
        if (l === r) return Comparison.EQ;
        if (l < r) return Comparison.LESS;
        if (l > r) return Comparison.GREATER;
        throw new Error("HOW?!?!?!?");
    }
}

export enum Operation {
    Add = 0,
    Sub = 1,
    Mult = 2,
    Div = 3
}

export type Scalar = number;

export interface ComplexNumber<T> extends
    Comp<T>, Add<T>, Sub<T>, Mult<T>, Div<T> {

}

/**
 * The standard {@link Add.add add} function
*/
export interface Add<T> {
    /**
     * Adds {@link other} to this (Modifying this). then returns this
     * @param {T} other thing thing to add
     * @returns {T} this modified instance
    */
    add(other: T): T;
}

export interface Sub<T> {
    sub(other: T): T;
}

export interface Mult<T> {
    mult(other: T): T;
}

export interface Div<T> {
    div(other: T): T;
}

/**
 * Allows Objects to be better compared
*/
export interface Comp<T> {
    /**
     * Compares the current object instance with {@link T T}.
     * 
     * Usually useful for comparing object with itself
     * 
     * @param {T} other object to compare to
    */
    compateTo(other: T): Comparison;
}