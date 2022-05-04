//functional chaining with prototype

function Maths(init = 0) {
  let result = init;

  this.getResult = function () {
    return result;
  };

  this.setResult = function (number) {
    result = number;
  };
}

Maths.prototype.add = function (...args) {
  let output = args.reduce((curr, acc) => curr + acc, this.getResult());
  this.setResult(output);
  return this;
};
Maths.prototype.subtract = function (...args) {
  let output = args.reduce((curr, acc) => curr - acc, this.getResult());
  this.setResult(output);
  return this;
};
Maths.prototype.multiply = function (multiplier) {
  let output = this.getResult() * multiplier;
  this.setResult(output);
  return this;
};
Maths.prototype.divide = function (divisor) {
  let output = this.getResult() / divisor;
  this.setResult(output);
  return this;
};

const maths = new Maths();

const result = maths
  .add(10, 20)
  .multiply(3)
  .subtract(10, 20, 8)
  .divide(2)
  .getResult();
console.log(result);

function ComputeAmount() {
  this.result = 0;

  this.value = function () {
    return this.result;
  };
}

ComputeAmount.prototype.thousand = function (n) {
  this.result += n * 1000;
  return this;
};
ComputeAmount.prototype.lacs = function (n) {
  this.result += n * 100000;
  return this;
};
ComputeAmount.prototype.crores = function (n) {
  this.result += n * 10000000;
  return this;
};

let computeAmount = new ComputeAmount();
let result = computeAmount
  .thousand(55)
  .lacs(45)
  .crores(43)
  .lacs(14)
  .crores(23)
  .thousand(1)
  .value();
console.log(result);
