function fact(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}
fact(5);

function fib(num) {
  if (num < 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(5));
