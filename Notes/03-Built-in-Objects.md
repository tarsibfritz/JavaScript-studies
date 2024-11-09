## What are Built-in Objects?

Built-in objects are pre-defined objects provided by JavaScript to handle common tasks, like working with numbers, strings, dates, arrays, and more. They include properties and methods that allow us to perform operations on data, manipulate the DOM (in the browser), manage dates and times, and perform mathematical calculations.

JavaScript's built-in objects are part of the **global object** in the environment (e.g., `window` in browsers or `global` in Node.js). Here are some of the most commonly used ones:

### Most Commonly Used Built-in Objects and Methods in JavaScript

1. **Object**
    - The `Object` object is the root of all objects in JavaScript. Every other object in JavaScript is either an instance of `Object` or has it in its prototype chain.
    - It provides basic methods for working with properties and prototypes.
    - **Object Methods**
        - **Object.keys( )**
            - Returns an array containing all of the property names (keys) of the given object.
                
                ```jsx
                let person = { name: "Alice", age: 25, city: "Paris" };
                
                console.log(Object.keys(person)); // ["name", "age", "city"]
                ```
                
        - Object.values( )
            - Returns an array containing all of the property values of the given object.
                
                ```jsx
                let person = { name: "Alice", age: 25, city: "Paris" };
                
                console.log(Object.values(person)); // ["Alice", 25, "Paris"]
                ```
                
        - Object.entries( )
            - Returns an array of `[key, value]` pairs for each property in the object.
            
            ```jsx
            let person = { name: "Alice", age: 25, city: "Paris" };
            
            console.log(Object.entries(person)); // [["name", "Alice"], ["age", 25], ["city", "Paris"]]
            ```
            
2. **Array**
    - The `Array` object is used to create arrays, which are lists of ordered elements.
    - Arrays come with many useful methods to manipulate and access elements.
    - **Array Methods**
        - **push( )**
            - Adds one or more elements to the end of an array and returns the new length of the array.
                
                ```jsx
                let fruits = ["apple", "banana"];
                
                fruits.push("orange"); // ["apple", "banana", "orange"]
                ```
                
        - **pop( )**
            - Removes the last element from an array and returns it.
                
                ```jsx
                let fruits = ["apple", "banana"];
                
                let lastFruit = fruits.pop(); // "orange", fruits = ["apple", "banana"]
                ```
                
        - **shift( )**
            - Removes the first element from an array and returns it.
                
                ```jsx
                let fruits = ["apple", "banana"];
                
                let firstFruit = fruits.shift(); // "apple", fruits = ["banana"]
                ```
                
        - **map( )**
            - Creates a new array by applying a function to each element of the original array.
                
                ```jsx
                let numbers = [1, 2, 3];
                let doubled = numbers.map(num => num * 2); // [2, 4, 6]
                ```
                
        - **filter( )**
            - Creates a new array with elements that pass a given test function.
                
                ```jsx
                let numbers = [1, 2, 3];
                
                let evenNumbers = numbers.filter(num => num % 2 === 0); // [2]
                ```
                
        - **reduce( )**
            - Reduces the array to a single value by applying a function to each element and accumulating the results.
                
                ```jsx
                let numbers = [1, 2, 3];
                
                let sum = numbers.reduce((total, num) => total + num, 0); // 6
                ```
                
3. **String**
    - The `String` object is used to create, manipulate, and work with text (strings).
    - Strings are **immutable**, so methods return new strings rather than modifying the original string.
    - **String Methods**
        - **toUpperCase( ) and toLowerCase( )**
            - Converts a string to uppercase or lowercase, respectively.
                
                ```jsx
                let greeting = "Hello";
                
                console.log(greeting.toUpperCase()); // "HELLO"
                ```
                
        - **indexOf( )**
            - Finds the first occurrence of a substring and returns its index, or `1` if not found.
            
            ```jsx
            let greeting = "Hello";
            
            console.log(greeting.indexOf("e")); // 1
            ```
            
        - **slice( )**
            - Extracts a section of the string and returns it as a new string. Takes two parameters: the starting index and (optional) ending index.
                
                ```jsx
                let greeting = "Hello";
                
                console.log(greeting.slice(1, 4)); // "ell"
                ```
                
        - **replace( )**
            - Replaces the first occurrence of a substring with a new substring.
                
                ```jsx
                let greeting = "Hello";
                
                console.log(greeting.replace("Hello", "Hi")); // "Hi"
                ```
                
        - **includes( )**
            - Checks if a substring exists within the string, returning `true` or `false`.
                
                ```jsx
                let greeting = "Hello";
                
                console.log(greeting.includes("ell")); // true
                ```
                
        - **split( )**
            - Splits a string into an array based on a specified delimiter.
                
                ```jsx
                let sentence = "Hello world";
                
                console.log(sentence.split(" ")); // ["Hello", "world"]
                
                ```
                
4. **Number**
    - The `Number` object is used to represent and manipulate numeric values.
    - In JavaScript, all numbers (integers and floats) are represented as 64-bit floating-point numbers.
    - **Number Methods**
        - **toFixed( )**
            - Rounds the number to a specified number of decimal places and returns it as a string.
                
                ```jsx
                let num = 123.456;
                
                console.log(num.toFixed(2)); // "123.46"
                ```
                
        - **Number.isNaN( )**
            - Checks if a value is `NaN` (Not-a-Number).
                
                ```jsx
                let num = 123.456;
                
                console.log(Number.isNaN(123)); // false
                console.log(Number.isNaN(NaN)); // true
                ```
                
        - **Number.isFinite( )**
            - Checks if a given value is a finite number (not `Infinity`, `-Infinity`, or `NaN`). Returns `true` if the value is finite, otherwise `false`.
                
                ```jsx
                console.log(Number.isFinite(100)); // true
                console.log(Number.isFinite(Infinity)); // false
                console.log(Number.isFinite(NaN)); // false
                ```
                
        - **Number.parseInt( ) and Number.parseFloat( )**
            - Converts a string to an integer (`parseInt`) or a floating-point number (`parseFloat`).
                
                ```jsx
                let str = "123.45";
                
                console.log(Number.parseInt(str)); // 123
                console.log(Number.parseFloat(str)); // 123.45
                ```
                
5. **Date**
    - The `Date` object is used to work with dates and times.
    - It can create, format, and manipulate dates.
    - **Date Methods**
        - **getDate( ), getMonth( ), getFullYear( )**
            - Retrieve specific parts of the date: day, month, and year.
                
                ```jsx
                let today = new Date();
                
                console.log(today.getDate()); // current day of the month
                console.log(today.getMonth() + 1); // current month (0-indexed, so add 1)
                console.log(today.getFullYear()); // current year
                ```
                
        - **toDateString( )**
            - Returns a date as a human-readable string.
                
                ```jsx
                let today = new Date();
                
                console.log(today.toDateString()); // "Sat Nov 09 2024"
                ```
                
        - **getTime( )**
            - Returns the timestamp (milliseconds since January 1, 1970).
                
                ```jsx
                let today = new Date();
                
                console.log(today.getTime()); // e.g., 1700000000000
                ```
                
        - **toLocalDateString( )**
            - Formats a date to a string according to the given locale and options. You can specify a language code (e.g., `"en-US"` for US English) and formatting options for how you want the date to appear.
                
                ```jsx
                let today = new Date();
                console.log(today.toLocaleDateString("pt-BR")); 
                // Output: "09/11/2024" (for November 9, 2024)
                
                // Custom formatting in pt-BR
                console.log(today.toLocaleDateString("pt-BR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
                // Output: "sábado, 9 de novembro de 2024"
                ```
                
6. **Math**
    - The `Math` object contains methods and properties for mathematical constants and functions.
    - It includes basic arithmetic operations, rounding functions, and trigonometric methods.
    - **Math Methods:**
        - **Math.round( ), Math.ceil( ), Math.floor( )**
            - **Math.round( ):** Rounds to the nearest integer.
            - **Math.ceil( ):** Rounds up to the next integer.
            - **Math.floor( ):** Rounds down to the previous integer.
                
                ```jsx
                console.log(Math.round(4.6)); // 5
                console.log(Math.ceil(4.2)); // 5
                console.log(Math.floor(4.8)); // 4
                ```
                
        - **Math.random( )**
            - Generates a random number between 0 (inclusive) and 1 (exclusive).
                
                ```jsx
                console.log(Math.random()); // 0.123456789, varies each time
                ```
                
        - **Math.sqrt( ) and Math.pow( )**
            - **Math.sqrt( ):** Returns the square root of a number.
            - **Math.pow( ):** Raises a number to the power of another.
                
                ```jsx
                console.log(Math.sqrt(16)); // 4
                console.log(Math.pow(2, 3)); // 8
                ```
                
7. **RegExp (Regular Expression)**
    - The `RegExp` object is used to create regular expressions for pattern matching and string search/replace operations.
    - Regular expressions are powerful tools for working with text patterns.
    - **RegExp Methods:**
        - **test( )**
            - Checks if a pattern exists in a string, returning `true` or `false`.
                
                ```jsx
                let regex = /hello/i; // case-insensitive
                
                console.log(regex.test("Hello World")); // true
                ```
                
        - **exec( )**
            - Executes a search for a match and returns an array of information if found, or `null` if not found.
                
                ```jsx
                let match = regex.exec("Hello World");
                
                console.log(match[0]); // "Hello"
                ```
                
        - **match( )**
            - Searches a string for matches with a regular expression and returns an array with matched results, or `null` if no match is found.
                
                ```jsx
                let text = "Hello, world!";
                
                let matchResult = text.match(/world/);
                console.log(matchResult); // ["world"]
                ```
                
        - **replace( )**
            - Replaces matched text within a string based on a specified regular expression or substring. Can also use a replacement function to customize the replacement.
                
                ```jsx
                let str = "Hello, world!";
                console.log(str.replace("world", "JavaScript")); // "Hello, JavaScript!"
                
                // Using a regular expression for case-insensitive replacement
                console.log(str.replace(/world/i, "JavaScript")); // "Hello, JavaScript!"
                ```
                
        - **split( )**
            - Divides a string into an array of substrings based on a specified delimiter.
                
                ```jsx
                let sentence = "apple,banana,orange";
                
                let fruits = sentence.split(","); // ["apple", "banana", "orange"]
                ```
                
8. **JSON** (JavaScript Object Notation)
    - The `JSON` object allows us to convert between JavaScript objects and JSON strings.
    - JSON is a common format for data exchange, especially in web APIs.
    - **JSON Methods:**
        - **JSON.stringify( )**
            - Converts a JavaScript object to a JSON string.
                
                ```jsx
                let user = { name: "Alice", age: 25 };
                
                let jsonString = JSON.stringify(user); // '{"name":"Alice","age":25}'
                ```
                
        - **JSON.parse( )**
            - Parses a JSON string and returns a JavaScript object.
                
                ```jsx
                let jsonString = JSON.stringify(user); // '{"name":"Alice","age":25}'
                
                let jsonObj = JSON.parse(jsonString); // { name: "Alice", age: 25 }
                ```
                
9. **Promise** (for Asynchronous Programming)
    - A `Promise` is an object representing the eventual completion (or failure) of an asynchronous operation.
    - It allows us to work with asynchronous code in a more manageable way.
    - **Promise Methods:**
        - **then( )**
            - Handles the resolved value of a promise.
                
                ```jsx
                let promise = Promise.resolve("Success!");
                
                promise.then(result => console.log(result)); // "Success!"
                ```
                
        - **catch( )**
            - Handles the rejected value of a promise.
                
                ```jsx
                let rejectedPromise = Promise.reject("Error!");
                
                rejectedPromise.catch(error => console.log(error)); // "Error!"
                ```
                
        - **Promise.all( )**
            - Accepts an array of promises and returns a single promise that resolves when all of the promises resolve or rejects as soon as any promise is rejected. If all promises resolve, the returned promise resolves with an array of results from each promise.
                
                ```jsx
                let promise1 = Promise.resolve(10);
                let promise2 = Promise.resolve(20);
                let promise3 = Promise.resolve(30);
                
                Promise.all([promise1, promise2, promise3])
                  .then(results => console.log(results)) // [10, 20, 30]
                  .catch(error => console.error(error));
                ```
                
        - **Promise.resolve( )**
            - Returns a promise that is resolved with a given value, making it useful for ensuring a value is wrapped in a promise.
                
                ```jsx
                let resolvedPromise = Promise.resolve("Success!");
                
                resolvedPromise.then(result => console.log(result)); // "Success!"
                ```
                
        - **Promise.reject( )**
            - Returns a promise that is rejected with a specified reason. Useful for creating promises that you want to reject immediately.
                
                ```jsx
                **let rejectedPromise = Promise.reject("Error!");
                
                rejectedPromise.catch(error => console.log(error)); // "Error!"**
                ```