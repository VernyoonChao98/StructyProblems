// Write a method, digitalRoot(num). It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number. Keep repeating
// until there is only one digit in the result, called the "digital root".
// Do not use string conversion within your method.

// EDGE CASE
// num = digit < 10   ex. 5
// num = - digit   ex. -10

// while num > 10
// 98123
// 22
// 4

//111111111
//9

const digitalRootOutSol = (num) => {
  if (typeof num !== "number") {
    return "NOT A NUMBER";
  }
  if (num < 0) {
    return "CAN NOT PROCESS NEGATIVE NUMBER";
  }

  while (num > 10) {
    let sum = 0;
    const digits = Math.floor(Math.log10(num));
    let arrayDigits = [];
    for (let i = digits; i >= 0; i--) {
      arrayDigits.push(Math.floor(num / 10 ** i));
      num = num - Math.floor(num / 10 ** i) * 10 ** i;
    }
    for (let i = 0; i < arrayDigits.length; i++) {
      sum += arrayDigits[i];
    }
    num = sum;
  }
  return num;
};

// console.log(digitalRoot(923));
// console.log(digitalRoot(12));
// console.log(digitalRoot(1002));
// console.log(digitalRoot(1231232));
// console.log(digitalRoot(1012364));
// console.log(digitalRoot(-1012364));
// console.log(digitalRoot("asdasd"));

// function digitalRoot(num) {
//   while (num > 10) {
//     // console.log(num);
//     num = digitalRootStep(num);
//   }
//   return num;
// }
// function digitalRootStep(num) {
//   let root = 0;
//   //   console.log(root, "HELLO");
//   while (num > 0) {
//     // console.log(root, "Hello");
//     root += num % 10;
//     num = Math.floor(num / 10);
//     console.log(num, "after modulo");
//   }
//   return root;
// }

// Alternate solution
// function digitalRoot(num) {
//   const digits = [];

//   while (num > 0) {
//     // 123 % 10 = 12.3
//     // 12 % 10 = 1.2
//     // 1 % 10 = 0.1
//     digits.push(num % 10);
//     console.log(digits);
//     num = Math.floor(num / 10);
//   }

//   const digitSum = digits.reduce((sum, digit) => sum + digit);
//   return digitSum > 10 ? digitalRoot(digitSum) : digitSum;
// }

// console.log(digitalRoot(123));

// // Magical one-line solution
// function digitalRoot(num) {
//   return num < 10
//     ? num
//     : digitalRoot(digitalRoot(Math.floor(num / 10)) + (num % 10));
// }
