/*

Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)

*/

// Solution-1

/*

Step1 - Sorting
Step2 - Finding duplicate in neighbors
Step3 - Return true/false

Time - O(nlogn) & Space - O(1)

*/

// -----------------------------

// Solution-2

/*

Step1 - Using frequency counter, find counts of items exist in argument list
Step2 - return true if count > 1 else false;

Time - O(n)

Space - O(n)

*/
