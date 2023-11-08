// Recursion: A process (a function in our case) called itself.

/* Why we need this?

- JSON.parse() / JSON.stringfy()
- document.getElementById and DOM traversal algorithm
- Object traversal
- We will see it with more complex data structure.
- Its sometimes a cleaner alternative to iteration.

*/

/* Lets talk about functions

- In almost all programming languages, there is a build in data structure that manages what happens when functions are invoked.
- Its name is CallStack.

--- Call Stack ---

- Its a stack data structure.
- Any time a function is invoked it is placed (pushed) on the top of the callstack.
- When javascript sees the return keyword or when the function ends, the compiler will remove (pop).

Note: When we write recursive functions, we keep pushing new functions onto the call stack.

*/

/* How recursive functions work?

- Invoke the same function with a different input until you reach your base case.

-- Base Case --

- The condition when the recursion ends.

*/

/* Two essential parts of a recursive function!

- Base Case
- Different Input
*/
