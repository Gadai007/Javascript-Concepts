const memomize = (fn, context) => {
  let result = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!result[argsCache]) {
      result[argsCache] = fn.call(context || this, ...args);
    }
    return result[argsCache];
  };
};

const clumsyProduct = (num1, num2) => {
    for(let i = 0; i <= 1000000000; i++){

    }

    return num1 * num2
}

const memoProduct = memomize(clumsyProduct)

console.time('First Time')
console.log(memoProduct(12, 12))
console.timeEnd('First time')

console.time('Second Time')
console.log(memoProduct(12, 12))
console.timeEnd('Second time')
