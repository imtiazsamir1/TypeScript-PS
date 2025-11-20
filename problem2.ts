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
