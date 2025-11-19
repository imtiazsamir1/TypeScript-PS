// Write a TypeScript function transformValue that takes a value of type string | number | boolean.

// If it’s a string, reverse it.

// If it’s a number, add 100.

// If it’s a boolean, return the opposite value.

function formatValue(value) {
  if (value == null) return "N/A";             // covers null and undefined
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 2;
  if (typeof value === "boolean") return !value;

  // fallback (not necessary given the allowed input types)
  return "N/A";
}

// Example outputs:
console.log(formatValue("hello"));   // HELLO
console.log(formatValue(10));        // 20
console.log(formatValue(true));      // false
console.log(formatValue(false));     // true
console.log(formatValue(null));      // N/A
console.log(formatValue(undefined)); // N/A
