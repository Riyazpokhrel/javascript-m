// let { name, age, ...rest } =
//   //rest operstor always placed in last.
//   {
//     name: "ram",
//     age: 34,
//     location: "bardibas",
//   };
// console.log(name, age);

// let sum = (a, ...b) => {
//   console.log(a);
//   console.log(b);
// };
// sum(1, 2, 3, 4, 5, 6);

// let [a, b, c, ...d] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//speread operator
//spread operator are wrapper opener.

// let list = [1, 2, 3, 4];
// let list1 = ["ram", "riyaz", "hello"];

// let output = [21, 12, "n9solution", ...list, "apple", ...list1, 34];
// console.log(output);

let info = {
  name: "ram",
  age: 40,
  location: "ktm",
};
let info1 = { ...info };
console.log(info1);
let info2 = { ...info, country: "nepal", isMarried: true };
console.log(info2);
