/*
Throttling: In throttling, the function is executed at a fixed interval. 
Even if the triggering event occurs more frequently, the function 
is invoked according to the defined interval.

Throttling: Throttling is suitable for scenarios where you want to limit 
the frequency of function calls, like handling scroll events or resizing events. 
It helps avoid overloading the system with frequent updates.
*/

// Expensive api call function
let count = 0;
function fetchData(position) {
  count++;
  console.log(`#${count} Fetching data...`, position);
}

function throttle(expensiveFunc, delay) {
  let lastCallTime = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCallTime > delay) {
      expensiveFunc(args);
      lastCallTime = now;
    }
  };
}

const throttleFetchData = throttle(fetchData, 1000);

window.addEventListener("scroll", function (e) {
  throttleFetchData({ x: this.scrollX, y: this.scrollY });
});

// const searchInput = document.querySelector("#search");

// searchInput.addEventListener("input", function (e) {
//   throttleFetchData(e.target.value);
// });
