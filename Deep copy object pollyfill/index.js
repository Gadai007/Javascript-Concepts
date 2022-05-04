const test = {
  past: [{ day: 31 }, { month: 12 }, { year: 2020 }],
  present: [{ day: 1 }, { month: 1 }, { year: 2021 }],
};

const deepClone = (input = {}) => {
  let result = Array.isArray(input) ? [] : {};

  if (typeof input !== "object") {
    return input;
  }

  for (let key in input) {
    result[key] = deepClone(input[key]);
  }

  return result;
};

console.log(deepClone(test));

//change keynames of object

const obj = { name: 'Bob', job: 'Frontend-engineer', shoeSize: 7}

const renameKeys = (keyObject, obj) => {
Object.keys(obj).reduce((acc, curr) => ({...acc, ...{}}), {})

}

renameKeys({ name: 'firstName', job: 'Passion'}, obj)
