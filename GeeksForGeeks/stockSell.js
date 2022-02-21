//Link - https://www.geeksforgeeks.org/stock-buy-sell/?ref=lbp

// the maximum profit can earned by buying on day 0, selling on day 3. Again buy on day 4 and sell on day 6

// const cost = [100, 180, 260, 310, 40, 535, 695];
const cost = [100, 40, 20, 80];
// 210+655=865;

function findProfit(cost) {
  let profit = 0;
  let index = 0;
  let newCost = [...cost];

  if (cost[0] > cost[1]) {
    let desc = newCost.sort((a, b) => b - a);
    //   console.log(cost);
    //   console.log(desc)
    let value = false;

    for (let i = 0; i < newCost.length; i++) {
      if (newCost[i] != desc[i]) {
        value = false;
      } else {
        value = true;
        break;
      }
    }
    if (value) {
      return "Profit cannot be earned.";
    }
  }

  for (let i = index; i < cost.length; i++) {
    if (cost[i + 1] < cost[i]) {
      profit = cost[i] - cost[0];
      index = i + 1;
      //   console.log(index);
      break;
    }
  }

  for (let i = index; i < cost.length; i++) {
    if (cost[i + 1] < cost[i]) {
      profit = cost[i] - cost[0];
      break;
    }
  }
  profit = profit + (cost[cost.length - 1] - cost[index]);

  //   for (var i = 0; i < cost.length; i++) {
  //     if (cost[i] != desc[i]) return "Profit cannot be earned.";
  //   }
  return profit;
}

console.log(findProfit(cost));
