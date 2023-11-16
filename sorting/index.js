/*

- What is Sorting?

Sorting is the process of rearranging the items in a collection (eg. array) so that the items 
are in some kind of order.

There are different different types of sorting algorithms.

*/

/* Why do we need to learn this?

- Sorting is an incredibly common task, so its good to know how it works.
- there are many different ways to sort things, and different techniques have their own advantages and disadvantages.

Elementry Sorting Algo
- Bubble Sort
- Selection Sort
- Insertion Sort

*/

// Javascript has own built-in sort method

// String list

const arr1 = ["banana", "grapes", "pineapple", "apple"];

console.log(arr1.sort());

// Number list

const arr2 = [6, 4, 10, 15];

console.log(
  arr2.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  })
);
