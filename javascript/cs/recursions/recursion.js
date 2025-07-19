function rec(n) {
  if (n === 0) {
    console.log("coding has be done");
    return;
  } else {
    console.log("I am doing coding");
    rec(n - 1);
  }
}
// rec(10);

let num = 0;

function factorial(n) {
  if(n === 1){
    return 1
  }
  let fact = n * factorial(n-1)
  return fact
}
console.log(factorial(5))

