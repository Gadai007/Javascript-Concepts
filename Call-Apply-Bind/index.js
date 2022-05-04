let name1 = {
  firstName: "Debayan",
  lastName: "Debnath",
};

let printFullName = function (place, state) {
  console.log(this.firstName + " " + this.lastName + " " + place + " " + state);
};

//function borrowing

printFullName.call(name1, "Agartala", "Tripura");
printFullName.apply(name1, ["Agartala", "Tripura"]);

//bind method
let bindFunction = printFullName.bind(name1, "Agartala", "Tripura");
console.log(bindFunction);
bindFunction();

//Another example

let obj = {
  num: 2,
};

function setAddvalues(a, b, c) {
  return this.num + a + b + c;
}

console.log(setAddvalues.call(obj, 2, 3, 4));
console.log(setAddvalues.apply(obj, [2, 3, 4]));

const bound = setAddvalues.bind(obj);
console.log(bound(2, 3, 4));
