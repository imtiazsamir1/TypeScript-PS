//! Write a TypeScript function transformValue that takes a value of type string | number | boolean.

// If it’s a string, reverse it.

// If it’s a number, add 100.

// If it’s a boolean, return the opposite value.

// valid JavaScript
function formatValue(value:any) {
  if (value == null) return "N/A";
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 2;
  if (typeof value === "boolean") return !value;
  return "N/A";
}

// Example outputs:
console.log(formatValue("hello"));   // HELLO
console.log(formatValue(10));        // 20
console.log(formatValue(true));      // false
console.log(formatValue(false));     // true
console.log(formatValue(null));      // N/A
console.log(formatValue(undefined)); // N/A

//! 2. Generic Length Checker

// Write a generic function getLength<T> that accepts a string, array, or Map.

// Return the length/size of the input.
function getLength<T>(value: T): number {
    if (typeof value === "string") {
        return value.length;
    }

    if (Array.isArray(value)) {
        return value.length;
    }

    if (value instanceof Map) {
        return value.size;
    }

    return 0; 
}

// Examples:
console.log(getLength("Hello"));          // Output: 5
console.log(getLength([1, 2, 3]));        // Output: 3
console.log(getLength(new Map([[1, 'a'], [2, 'b']]))); // Output: 2
