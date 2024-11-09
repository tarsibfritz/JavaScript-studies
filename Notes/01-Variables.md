<aside>
<img src="/icons/code_purple.svg" alt="/icons/code_purple.svg" width="40px" />

What is a variable?
In programming, a **variable** is a container for storing data values. They allow you to store various data types, such as numbers, text, arrays, and more, that you can manipulate throughout your program.

</aside>

## Variable Types in JavaScript

JavaScript variables can hold different data types, which can be divided into two main categories:

- **Primitive Types:**
    - **Number:** Represents numbers (e.g., 42, 3.13, -7).
    - **String:** Represents text (e.g., “Hello World”, ‘name’).
    - **Boolean:** Represents logic values (true or false).
    - **Undefined:** A variable declared but not assigned any value defaults to `undefined`.
    - **Null:** Represents an intentional absence of any object value.
    - **Symbol (ES6):** Represents a unique identifier, often used as keys for object properties.
- **Reference Types (or Objects):**
    - **Object:** A collection of properties, which are key-value pairs (e.g., {name: ‘Alice’, age: 25}).
    - **Array:** An ordered list of items (e.g., [2, 4, 8]).
    - **Function:** A block of code that can be executed when invoked.

---

## Declaring Variables

JavaScript provides three main ways to declare (create) variables: `var`, `let`, and `const`.

- var:
    - Used in older JavaScript code.
    - Variables declared with `var` are function-scoped or globally-scoped, not block-scoped.
    - Can be re-declared and updated.
- let (ES6):
    - Block-scoped, meaning it only exists within the enclosing `{ }`.
    - Can be updated but not re-declared within the same scope.
- const (ES6):
    - Also block-scoped, like `let`.
    - Cannot be updated or re-declared. Once assigned, the value cannot be changed.
    - Useful for values that shouldn’t change, like configuration values and constants.

### **Initialization vs. Declaration**

Declaring a variable means simply creating a variable without giving it a value, while initializing a variable means both declaring and assigning a value to it.

Example:

```jsx
let age; // Declaration without initialization
age = 25; // Initialization
```

---

## Hoisting

In JavaScript, **hoisting** is a behavior where variable declarations are “moved” to the top of their scope before code execution.

- **var** declarations are hoisted to the top of their function or global scope and initialized with `undefined`.
- **let** and **const** declarations are also hoisted, but they are not initialized. Accessing them before their declaration results in a **ReferenceError**.

**Example:**

```jsx
console.log(name); // Output: undefined due to var hoisting
var name = "Alice";

console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;
```

---

## Variable Naming Rules

When naming variables in JavaScript, there are a few rules and best practices to follow:

- **Rules**:
    - Variable names **cannot start with a number**. (`let 1name = 'Lucas'` is invalid).
    - They **can start with a letter, underscore (_), or dollar sign ($)**.
    - Variable names are **case-sensitive** (`name` and `Name` are different).
    - Keywords (like `var`, `let`, `const`) cannot be used as variable names.
- **Best Practices**:
    - Use descriptive names (`let userAge = 30`).
    - Follow camelCase for multi-word variables (`let userName`, not `username`).
    - Avoid single-letter variable names except for short, common ones like `i` in loops.

---

## Variable Scope

**Scope** refers to the visibility and accessibility of a variable in different parts of your code.

- **Global Scope**:
    - Variables declared outside any function or block are in the global scope.
    - They can be accessed from anywhere in your code.
    - **Risks:** Accidental overwrites, pollution of the global namespace, harder debugging.
    
    > You **cannot** have a true **global scope** variable if you use `let` or `const` to declare a variable in the global context in modern JavaScript (especially in strict mode).
    > 
- **Function Scope**:
    - Variables declared with `var` inside a function are scoped to that function and cannot be accessed outside.
    - **Risks**: Hoisting issues, accidental overwrites, less fine-grained control (especially inside blocks like `if` statements).
- **Block Scope**:
    - Variables declared with `let` and `const` are limited to the block `{}` (e.g., loops, conditionals, or function blocks.) where they are declared.
    - This helps avoid accidental variable overwrites and makes code easier to manage.

**Example:**

```jsx
var globalVar = "I'm global";

function testFunction() {
  var functionVar = "I'm function-scoped";
  console.log(globalVar); // Accessible
  console.log(functionVar); // Accessible
}
console.log(globalVar); // Accessible
console.log(functionVar); // ReferenceError: functionVar is not defined

if (true) {
  let blockVar = "I'm block-scoped";
  console.log(blockVar); // Accessible within the block
}
console.log(blockVar); // ReferenceError: blockVar is not defined
```