const solution = (n, k) => {
  var res = n * 12000 + (k * 2000 - parseInt(n / 10) * 2000);
  return res;
};