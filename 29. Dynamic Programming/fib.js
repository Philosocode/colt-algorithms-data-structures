function fib(n) {
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

function memoFib(n, memo=[undefined,1,1]) {
  if (memo[n]) return memo[n];
  
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  
  return res;
}

function tabFib(n) {
  if (n <= 2) return 1;

  const fibNums = [0,1,1];

  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }

  return fibNums[n];
}