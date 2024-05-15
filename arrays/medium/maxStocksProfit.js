// SOLUTION-1 => tEXECUTION TIME EXCEED

// var maxProfit = function (prices) {
//   if (prices.length < 2) {
//     return 0;
//   }

//   let maxProfit = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     const buyPrice = prices[i];

//     for (let j = i; j < prices.length; j++) {
//       if (prices[j] > buyPrice) {
//         let profit = prices[j] - buyPrice;
//         maxProfit = maxProfit < profit ? profit : maxProfit;
//       }

//       // console.log({ buyPrice, price: prices[j], profit, maxProfit });
//     }
//   }

//   return maxProfit;
// };

// SOLUTION:

var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }

  let maxProfit = 0;
  let buyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
      continue;
    } else {
      let profit = prices[i] - buyPrice;
      maxProfit = maxProfit < profit ? profit : maxProfit;
    }
  }

  return maxProfit;
};

// TESTING

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
