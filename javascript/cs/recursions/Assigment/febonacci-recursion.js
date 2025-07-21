function fibs(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let result = [0, 1];
  for (let f = 2; f < num; f++) {
    result.push(result[f - 1] + result[f - 2]);
  }
  return result;
}

// console.log(fibs(10));

////////////////////////////

// Fibs Recursion
function fibsRec(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const prev = fibs(num - 1);
  return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}
// console.log(fibsRec(10));