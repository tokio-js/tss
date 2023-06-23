import { Option } from "../../types+.ts";
export { SimpleStack } from "./impls/simpleStack.ts";
export { FastStack } from "./impls/fastStack.ts";

/**
 * # **[Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))**
 * 
 * ### Visualisation
 * 
 * ```text
 * | Stack |            | Stack |       | Stack |
 * |       |  push '2'  |       |  pop  |       |
 * |       | =========> |       | ====> |       |
 * |       |    void    |   2   |  '2'  |       |
 * |   1   |            |   1   |       |   1   |
 * ```
 * 
 * ### Methods
 * 
 * - {@link Stack.push push}:
 * pushes a value onto the stack.
 * - {@link Stack.isEmpty isEmpty}:
 * returns if they stack is empty or not.
 * - {@link Stack.popSafe popSafe}:
 * safely pops a value from the stack by checking the length.
 * - {@link Stack.pop pop}:
 * Pops a value of the stack without a sefety check.
*/
export interface Stack<T> {
    /**
     * Pushes a value onto the stack
     * @param {T} value value to push
    */
    push(value: T): void;
    /**
     * Checks if the stack is empty
     * (has 0 elements).
     * @returns {boolean} true if empty
    */
    isEmpty(): boolean;
    /**
     * **SAFELY** pops a value off of the stack
     * (internally calles isEmpty)
     * 
     * returns {@link Some Some(T)} if the stack isn't empty, otherwise {@link None None}
     * 
     * @returns {Option<T>} an {@link Option option}
    */
    popSafe(): Option<T>;
    /**
     * Pops a value of the stack without a sefety check.
     * 
     * @throws an error if the stack was empty
     * @returns {T} the value from the stack
    */
    pop(): T;
}
