/*
Debouncing: In debouncing, the function is only executed after a specific 
delay since the last event's occurrence. If new events occur within the 
delay period, the timer is reset, and the function execution is further delayed.

Debouncing: Debouncing is ideal when you want to wait for a pause in the events before 
triggering a function. This is useful for situations like search suggestions, 
where you want to wait for the user to finish typing before fetching suggestions.
*/

const searchInput = document.querySelector("#search");
const submitButton = document.querySelector("button");
let count = 0;

// Expensive api call function
function fetchData(str) {
  count++;
  console.log(`#${count} Fetching data...`, str);
}

// timeDelay: delay since the last event's occurrence when function get executed.

function debouncing(expensiveFunc, timeDelay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      expensiveFunc(args);
    }, timeDelay);
  };
}

const debouncedFetchData = debouncing(fetchData, 300);

searchInput.addEventListener("input", function (e) {
  debouncedFetchData(e.target.value);
});
