function fibs(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let prev = fibs(n - 1);
  return [...prev, prev[prev.lengh - 1] + prev[prev.lengh - 2]];
}

