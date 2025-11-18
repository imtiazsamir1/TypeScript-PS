// Write a TypeScript function transformValue that takes a value of type string | number | boolean.

// If it’s a string, reverse it.

// If it’s a number, add 100.

// If it’s a boolean, return the opposite value.

function transformValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") return value.split(` `).reverse().join(` `);
    if (typeof value === "number") return value + 100;
    return !value;
}
console.log(transformValue('samir'))
console.log(transformValue(5))
console.log(transformValue(true))