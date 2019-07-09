// Arrow function

const sum = (...args) => {
  const params = Array.prototype.slice.call(args);
  console.log(params);
  if (!params.length) return 0;
  const pn = (prev, next) => prev + next;
  return params.reduce(pn);
}

let res = sum(1,2,3,4);
console.log(res);

