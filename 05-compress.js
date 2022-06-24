// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string
// where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'

// You can assume that the input only contains alphabetic characters.

const compress = (s) => {
    let letter = s[0]
    let number = 0
    let result = ""

    for (let i = 0; i < s.length; i++) {
      if (letter !== s[i]) {
        if (number === 1) {
          result = result.concat(letter)
        } else {
          result = result.concat(number, letter)
        }
        letter = s[i]
        number = 1

      if (i === s.length - 1) {
        if (number === 1) {
          result = result.concat(letter)
        } else {
            result = result.concat(number, letter)
        }
      }
        
      } else {
        number += 1

      if (i === s.length - 1) {
        if (number === 1) {
          result = result.concat(letter)
        } else {
            result = result.concat(number, letter)
        }
      }

      }
    }
    return result
  };
