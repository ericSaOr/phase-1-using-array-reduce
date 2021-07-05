const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 0)
// => 12    



const totalBatteries = batteryBatches.reduce ((element1, element2) => element1 + element2, 0)