// const test = () => {
//   let a = 0,
//     b = 0,
//     c = 0;
//   if (++a > 0 || ++b > 0) {
//     ++c;
//   }
//   console.log('a: ', a, '\nb: ', b, '\nc: ', c);
// };
// test();
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.includes('Mango'));

// const sumFibonacciLimit = (limit) => {
//   let fibonacciArray = [];
//   fibonacciArray[0] = 0;
//   fibonacciArray[1] = 1;
//   let sum = fibonacciArray[0] + fibonacciArray[1];
//   for (let i = 2; ; i++) {
//     if (fibonacciArray[i - 2] + fibonacciArray[i - 1] >= limit) break;
//     fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1];
//     sum += fibonacciArray[i];
//   }
//   //   const totalResult = fibonacciArray.reduce((total, value) => total + value);
//   return {
//     fibonacciArray,
//     sum,
//   };
// };

// const limit = 1000;
// const { fibonacciArray, sum } = sumFibonacciLimit(limit);
// console.log('<<=== FibonacciArray ===>>', fibonacciArray);
// console.log('<<=== sum ===>>', sum);

// const filterRemainingNumbers = (limit) => {
//     const array100 = [];
//     const array = [];
//     for (let i = 1; i <= 100; i++) {
//       array100.push(i);
//     }

//     while (array.length < limit) {
//       const randomNumber = Math.floor(Math.random() * 100 + 1);
//       if (!array.includes(randomNumber)) {
//         array.push(randomNumber);
//       }
//     }
//     console.log(array);
//     return array100.filter((element) => !array.includes(element));
//   };

//   let result = filterRemainingNumbers(95);
//   console.log(result);

class CustomString {
  constructor(string) {
    this.string = string;
  }

  concat(otherString) {
    return this.string + otherString.toString();
  }

  subString(start, end) {
    if (start < 0 || end > this.string.length) {
      return;
    }
    let result = '';
    for (let i = start; i < end; i++) {
      result += this.string[i];
    }
    return result;
  }

  distinct() {
    let uniqueChars = '';
    for (let char of this.string) {
      if (!uniqueChars.includes(char)) {
        uniqueChars += char;
      }
    }
    return uniqueChars;
  }

  contains(substring) {
    return this.string.includes(substring.toString());
  }

  toString() {
    return this.string;
  }
}

const str1 = new CustomString('Hello');
const str2 = new CustomString(' World');

const concatenated = str1.concat(str2);
console.log(concatenated.toString()); // In ra "HelloWorld"

// const substring = new CustomString('Hello World');
// console.log(substring.subString(3, 8)); // In ra "lo Wor"

// const distinctChars = concatenated.distinct();
// console.log(distinctChars); // In ra "HeloWrd"

const containsCheck = new CustomString('Hello World');
console.log(containsCheck.contains('lo')); // In ra true
