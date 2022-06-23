// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.

// The function should return an uncompressed version of the string where each 'char' of a group is repeated
// 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s) => {
  let start = 0;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) {
      let number = s.slice(start, i);
      let letter = s.slice(i, i + 1);
      start = i + 1;
      for (let j = 0; j < number; j++) {
        result = result.concat(letter);
      }
    }
  }
  return result;
};

module.exports = {
  uncompress,
};

uncompress("2a3x4e");
