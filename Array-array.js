/*
Create a function that 
returns the sum of two arrays,
or rather the sum of their elements.
Each array includes only integer numbers.
*/


// Solution

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

// or

function arrayAndArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}
