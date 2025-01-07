# Type 'string[]' is not assignable to type 'string' in TypeScript
This example demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string argument.

## Problem
The `greeter` function is defined to accept a single string and return a greeting.  However, an array of strings is passed as an argument, leading to a type error. 

## Solution
The solution involves either modifying the `greeter` function to accept an array or modifying the function call to pass only one string.

## How to Reproduce
1. Save the code in `bug.ts`.
2. Compile the code using a TypeScript compiler (e.g., `tsc bug.ts`).
3. Observe the error message.