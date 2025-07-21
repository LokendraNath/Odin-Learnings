///=== Question 1: Sum all numbers ===//

function sumRange(n) {
  if (n === 1) return 1;

  return n + sumRange(n - 1);
}
console.log(sumRange(7));

///=== Question 2: Power function ===//

function power(base, exponent) {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
}

console.log(power(2, 4));

///=== Question 3: Calculate factorial ===//

console.log(factorial(5));

function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

///=== Question 4: Check all values in an array ===//

function all(arr, callback) {
  let copy = arr.slice();
  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  } else {
    return false;
  }
}

const allAreLessThanTen = all([3, 3, 5, 4], function (num) {
  return num < 10;
});
console.log(allAreLessThanTen);

///=== Question 5: Product of an array ===//

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr.shift() * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3]));

///=== Question 6: Search JS object ===//

let nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function contains(obj, find) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], find);
    }
    if (obj[key] === find) {
      return true;
    }
  }
  return false;
}
let hasIt = contains(nestedObject, 44);
console.log(hasIt);

///=== Question 7: Parse a multi-dimensional array ===//

function totalIntegers(arr) {
  if (arr.length === 0) return 0;

  let total = 0;
  let first = arr.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(arr);
}
var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
console.log(seven);

///==== Fibonacci (0,1,1,2,3,5,8,13,21)

function fibonacci(n){
  if(n < 2) return n;

  return fibonacci(n - 2) + fibonacci(n - 1);
}
console.log(fibonacci(1000))
