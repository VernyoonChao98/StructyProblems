// Write some function `prodArray` that takes an array of ints `nums` as an argument and returns a new array `result`
// such that each index in `result` represents the product of all ints in `nums` EXCEPT for the int at that current index.

// CQs:

// nums === [] => return []
// 0 in array ? true => your solution should not change.
// < 0 ? true => ‘’
// O(n)
// Array.length === 1 return single element

// I/O:

// [1,2,3,4] => [24,12,8,6]

// [1,2,3] => [6, 3, 2]

// [0,1,2,3] => [6,0,0,0]

// [0,0,2,3] => [0,0,0,0]

// Pseudocode:

// Declare function prodArray(arr - int:nums)
// Declare & return - result = []
// Get an initial multiply of all int in the array
// multiply and divide (fail at 0)
// If zero, product of everything else.

const prodArray = (nums) => {
  const result = [];
  let product = 1;
  let numZeros = 0;
  let zeroIndex = 0;

  if (nums.length === 1) {
    return nums;
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (typeof num !== typeof 0) {
      return "NOOOOOOOOOOOO";
    }

    if (num === 0) {
      numZeros++;
      zeroIndex = i;
      continue;
    }
    product *= num;
  }

  if (numZeros > 1) {
    return new Array(nums.length).fill(0);
  }

  if (numZeros === 1) {
    const result = new Array(nums.length).fill(0);
    result[zeroIndex] = product;
    return result;
  }

  //   if (numZeros === 1) {
  //     for (let i = 0; i < nums.length; i++) {
  //       let num = nums[i];
  //       if (num === 0) {
  //         result.push(product);
  //       } else {
  //         result.push(0);
  //       }
  //     }
  //   } else {
  for (let num of nums) {
    result.push(product / num);
    // }
  }

  return result;
};

// console.log(prodArray([0, 1, 2, 3]));
// console.log(prodArray([0, 1, 2, 0]));
// console.log(prodArray([0, 1, 2, "hi"]));
// console.log(prodArray(["hi", 1, 2, 3]));
// console.log(prodArray([9]));

const prodArrayNoDiv = (nums) => {
  const result = [];
  let product = 1;
  let numZeros = 0;
  let zeroIndex = 0;

  if (nums.length === 1) {
    return nums;
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (typeof num !== typeof 0) {
      return "NOOOOOOOOOOOO";
    }

    if (num === 0) {
      numZeros++;
      zeroIndex = i;
      continue;
    }
    product *= num;
  }

  if (numZeros > 1) {
    return new Array(nums.length).fill(0);
  }

  if (numZeros === 1) {
    const result = new Array(nums.length).fill(0);
    result[zeroIndex] = product;
    return result;
  }

  for (let i = 0; i < nums.length; i++) {
    let newProduct = 1;

    for (let j = 0; j < nums.length; j++) {
      let numtwo = nums[j];
      if (i === j) {
        continue;
      }
      newProduct *= numtwo;
    }

    result.push(newProduct);
  }

  return result;
};

console.log(prodArrayNoDiv([0, 1, 2, 3]));
console.log(prodArrayNoDiv([0, 1, 2, 0]));
console.log(prodArrayNoDiv([0, 1, 2, "hi"]));
console.log(prodArrayNoDiv(["hi", 1, 2, 3]));
console.log(prodArrayNoDiv([0, 1, 2, [1, 2, 3]]));
console.log(prodArrayNoDiv([9]));
console.log(prodArrayNoDiv([1, 2, 3]));
