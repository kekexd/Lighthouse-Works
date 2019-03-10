let input = [45, 24, 35, 31, 40, 38, 11];

function maxProfit(arr){
  let sorted = arr.slice(0, -1).sort(function(a, b){ return a - b});
  let lowest = sorted[0];
  let lowestIndex = arr.indexOf(lowest);

  let sorted2 = arr.slice(lowestIndex + 1).sort(function(a, b){ return b - a});
  let highest = sorted2[0];
  console.log(highest - lowest);
}

maxProfit(input);