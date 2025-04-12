// JavaScript Tricks You Might Not Know!

// 1️⃣ Optional Chaining (?.)
// 👉 Avoids errors when accessing deeply nested properties.

const user = { profile: { name: "Sri" } };
console.log(user.profile?.name); // Sri
console.log(user.profile?.age); // undefined (No error!)

// 2️⃣ Nullish Coalescing (??)
// 👉 Returns the right-hand value only if the left-hand value is null or undefined.

let value = null;
console.log(value ?? "Default Value"); //Default Value

// 3️⃣ Quick Array Deduplication
// 👉 Removes duplicate values from an array instantly!

const arr = [1, 2, 2, 3, 4, 4];
console.log([...new Set(arr)]); // [1, 2, 3, 4]

// 4️⃣ Short-Circuit Evaluation
// 👉 Returns the second value if the first is truthy.

const isLoggedIn = true;
const message = isLoggedIn && "Welcome back!";
console.log(message); // Welcome back!

// 5️⃣ Swapping Variables Without Temp Variable

let a = 10,
  b = 20;
[a, b] = [b, a];
console.log(a, b); // 20, 10

// ✅ Method 1: Using the Logical OR (||) Operator

const value0 = null;
return <p>{value || "Default Text"}</p>; // Renders "Default Text"

// ✅ Method 2: Using the Ternary Operator

const value1 = false;
return <p>{value ? value : "Falsy Value"}</p>; // Renders "Falsy Value"

// ✅ Method 3: Converting Falsy Values to Strings
// JSX ignores false, null, undefined, so converting them to a string ensures they are rendered.

const value2 = null;
return <p>{String(value)}</p>; // Renders "null"

// ✅ Method 4: Explicitly Handling 0
// Since 0 is a valid falsy value but still renders, handle it separately:

const value3 = 0;
return <p>{value || "Fallback"}</p>; // ❌ Won’t work, as 0 is falsy
return <p>{value !== 0 ? value : "Zero"}</p>; // ✅ Renders "Zero"
