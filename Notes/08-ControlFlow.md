## What is Control Flow?

**Control flow** refers to the order in which the computer executes statements in a program. In JavaScript, control flow allows us to alter this order, enabling programs to make decisions, repeat actions, and handle unexpected situations.

Control flow consists of:

1. **Conditional Statements:** Decides which code to execute based on conditions.
2. **Exception Handling:** Manages errors that occur during program execution.

---

### When to Use Control Flow

Control flow is essential whenever:

- You need to execute specific code based on conditions (like showing a different message depending on user input).
- You want to catch and handle errors gracefully to prevent program crashes.

---

### Conditional Statements

1. **`if…else` Statements**
    - The `if…else` structure executes code based on whether a condition is true or false.
    - **Syntax:**
        
        ```jsx
        if (condition) {
          // Code if condition is true
        } else {
          // Code if condition is false
        }
        ```
        
    - **Example:**
        
        ```jsx
        let age = 18;
        if (age >= 18) {
          console.log("You're an adult.");
        } else {
          console.log("You're a minor.");
        }
        ```
        
2. **`else…if` Statements**
    - You can chain multiple conditions using `else if` to handle more complex decision-making.
    - **Syntax:**
        
        ```jsx
        if (condition1) {
          // Code if condition1 is true
        } else if (condition2) {
          // Code if condition2 is true
        } else {
          // Code if none of the above conditions are true
        }
        ```
        
    - **Example:**
        
        ```jsx
        let score = 85;
        if (score >= 90) {
          console.log("Grade: A");
        } else if (score >= 80) {
          console.log("Grade: B");
        } else {
          console.log("Grade: C or lower");
        }
        ```
        
3. **switch Statement**
    - The `switch` statement is an alternative to multiple `else if` conditions. It compares a variable or expression against multiple values and executes the matching case.
    - **Syntax:**
        
        ```jsx
        switch (expression) {
          case value1:
            // Code if expression === value1
            break;
          case value2:
            // Code if expression === value2
            break;
          default:
            // Code if no case matches
        }
        ```
        
    - **Example:**
        
        ```jsx
        let day = "Monday";
        switch (day) {
          case "Monday":
            console.log("Start of the work week.");
            break;
          case "Friday":
            console.log("End of the work week.");
            break;
          default:
            console.log("Midweek day.");
        }
        ```
        
    - **When to Use `switch`**: Use `switch` when you have multiple conditions based on a single value, especially if they’re easier to read than multiple `if...else` statements.

---

### Exception Handling

**Exception handling** in JavaScript allows you to manage errors and take specific actions when something goes wrong, preventing program crashes and enhancing reliability.

1. **`throw` Statement**
    - The `throw` statement lets you manually trigger an error, often based on conditions in your code.
    - **Syntax**:
        
        ```jsx
        throw new Error("Error message");
        ```
        
    - **Example**:
        
        ```jsx
        function checkNumber(num) {
          if (num < 0) {
            throw new Error("Negative numbers are not allowed.");
          }
          return num;
        }
        
        checkNumber(-1); // This will throw an error
        ```
        
2. **`try...catch...finally` Block**
    - `try` defines a block of code that may throw an error.
    - `catch` handles the error if one occurs.
    - `finally` contains code that always runs after `try` and `catch`, regardless of whether an error occurred.
    - **Syntax**:
        
        ```jsx
        try {
          // Code that might throw an error
        } catch (error) {
          // Code to handle the error
        } finally {
          // Code that always runs after try/catch
        }
        ```
        
    - **Example**:
        
        ```jsx
        try {
          let result = checkNumber(-1); // This calls the function from above
        } catch (error) {
          console.log("Error caught:", error.message); // Output: "Error caught: Negative numbers are not allowed."
        } finally {
          console.log("Execution completed.");
        }
        ```
        
3. **Error Objects**
    - Error objects in JavaScript provide details about an error and can be created manually using `new Error("message")`.
    - Common types of error objects:
        - **Error**: General error.
        - **SyntaxError**: Invalid syntax (often a typo or code structure issue).
        - **TypeError**: Invalid data type (e.g., calling a non-function).
        - **ReferenceError**: Accessing a variable that doesn’t exist.
        - **RangeError**: Value outside an allowable range (e.g., too many decimal places).
    - **Example**:
        
        ```jsx
        try {
          let value = undefinedVariable; // Throws a ReferenceError
        } catch (error) {
          console.log(error.name); // Output: ReferenceError
          console.log(error.message); // Output: "undefinedVariable is not defined"
        }
        ```
        

---

## **Summary**

- **Control flow** enables decision-making and error-handling in your code.
- **Conditional Statements**:
    - `if...else` and `else if` execute code based on conditions.
    - `switch` provides an alternative to multiple `if...else` conditions based on a single value.
- **Exception Handling**:
    - `throw` manually triggers an error.
    - `try...catch...finally` provides a structure to handle errors gracefully.
    - **Error Objects** provide detailed information on errors and allow specific error handling.