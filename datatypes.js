// //premitive or non-premitive datatype

// //premitive
// //string,number,boolean,undefined,null

// console.log(typeof "ram");
// console.log(typeof 1);

// // non-premitive
// //array,object,function

// let sum = () => {};
// console.log(typeof sum);
// console.log(typeof { name: "riyaz" });
// console.log(typeof [1]);
// console.log(typeof new Date());

// // In javascript, a primitive datatype is not an object and has no methods or properties.

// console.log();

let list = [1, 2, 3, 4, 5, 2, 4, 3, 3, 6, 7, 4];
let output = [...new Set(list)];
console.log(output);
