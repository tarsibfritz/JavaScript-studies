## Primitive Data Types

Primitive types are the simplest data types in JavaScript. These types represent a single value and are immutable, meaning their value cannot be changed once they are created. JavaScript has **6 primitive types**:

1. **Number**
    - Represents both integer and floating-point numbers.
    - Examples: `5`, `3.14`, `200`, `NaN` (Not-a-Number), `Infinity`, `-Infinity`.
    
    **Example**:
    
    ```jsx
    let num = 42; // integer
    let pi = 3.14; // floating-point number
    let infinity = Infinity; // special value
    ```
    
2. **String**
    - Represents a sequence of characters (text).
    - Strings can be created using single quotes (`'`), double quotes (`"`), or backticks (```) for template literals.
    
    **Example:**
    
    ```jsx
    let greeting = "Hello, world!";
    let name = 'Alice';
    let message = `Hello, ${name}!`; // template literals (string interpolation)
    ```
    
3. **Boolean**
    - Represents a logical value: either `true` or `false`.
    
    ```jsx
    let isActive = true;
    let isComplete = false;
    ```
    
4. **Undefined**
    - Represent a variable that has been declared but not assigned a value.
    - If you declare a variable but don’t initialize it, it automatically gets the value `undefined`.
    
    **Example:**
    
    ```jsx
    let age;
    console.log(age); // undefined
    ```
    
5. **Null**
    - Represents the intentional absence of any value or object.
    - `null` is a special value that is explicitly set to indicate "no value".
    
    **Example:**
    
    ```jsx
    let user = null; // no object assigned
    ```
    
6. **Symbol (ES6)**
    - Represents a unique and immutable value, often used as an object property key to avoid name conflicts.
    - Symbols are useful for creating hidden or private properties in objects.
    
    **Example:**
    
    ```jsx
    let sym1 = Symbol('id');
    let sym2 = Symbol('id');
    console.log(sym1 === sym2); // false (they are unique)
    ```
    
7. **BigInt** (ES11)
- A newer primitive type introduced to represent integers larger than `2^53 - 1`, which is the limit for the `Number` type.
    
    **Example**:
    
    ```jsx
    let bigInt = 1234567890123456789012345678901234567890n;
    console.log(bigInt); // 1234567890123456789012345678901234567890n
    ```
    

---

## Object Data Type

Unlike primitives, **objects** are more complex types that can store collections of data and more structured information. Objects in JavaScript are **mutable**, meaning their contents (properties) can be changed after they are created.

1. **Basic Objects**
    - A general object in JavaScript is a collection of key-value pairs, where the key is always a **string** (or a symbol), and the value can be any data type, including other objects.
    
    **Example:**
    
    ```jsx
    let person = {
      name: 'John',
      age: 30,
      isActive: true
    };
    ```
    
2. **Arrays**
    - Arrays are a special type of object used to store ordered lists of values. Arrays are indexed by **numbers**, and they can hold values of any type.
    
    **Example:**
    
    ```jsx
    let numbers = [1, 2, 3, 4, 5];
    let mixed = ['Alice', 30, true, { key: 'value' }];
    ```
    
3. **Functions**
    - Functions in JavaScript are actually **objects**. They can be assigned to variables, passed around as arguments, and even returned from other functions.
    
    **Examples:**
    
    ```jsx
    function greet() {
      return 'Hello!';
    }
    
    let greetFunc = greet; // Function stored in a variable
    ```
    

---

## The `typeof` Operator

The **`typeof`** operator is used to determine the type of a variable or expression. It returns a string that indicates the type of the operand.

### Common Results of `typeof`:

- **`"number"`**: For numbers (including `NaN`).
- **`"string"`**: For strings.
- **`"boolean"`**: For booleans.
- **`"undefined"`**: For variables that are declared but not initialized.
- **`"object"`**: For objects, arrays, and `null` (this is a bit misleading, but `typeof null` returns `"object"`).
- **`"function"`**: For functions (functions are technically objects, but `typeof` can distinguish them).
- **`"symbol"`**: For symbols.
- **`"bigint"`**: For BigInt values.

**Examples:**

```jsx
let number = 42;
let name = "Alice";
let isActive = true;
let person = { name: "John", age: 30 };
let numbers = [1, 2, 3];
let func = function() { return 'Hello!'; };
let bigIntVal = 1234567890123456789012345678901234567890n;

console.log(typeof number); // "number"
console.log(typeof name); // "string"
console.log(typeof isActive); // "boolean"
console.log(typeof person); // "object"
console.log(typeof numbers); // "object" (arrays are objects)
console.log(typeof func); // "function"
console.log(typeof bigIntVal); // "bigint"
```