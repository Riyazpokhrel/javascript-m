// object

//Arrray is a collection of values whereas object is a collection of key value pairs. key value pairs are called properties.

// let list = {
//   name: "riyaz",
//   age: 9,
//   location: "bardibas",
// };
// // //get value
// // console.log(list.age);
// // console.log(list.location);

// // // change value
// // list.name = "ram";
// // console.log(list.name);

// // delete value
// delete list.location;
// console.log(list);

// let info = {
//   name: "ram",
//   favFruits: ["apple", "banana", "orange"],
//   location: {
//     city: "kathmandu",
//     province: "Bagmati",
//     country: "Nepal",
//   },
//   sge: () => {
//     console.log("i ma a function");
//   },
// };

// // info.age();
// // console.log(info);
// // console.log(info.name);
// // console.log(info.favFruits[2]);
// // console.log(info.location.country);

// let product = [
//   { name: "mobile", price: 15000 },
//   { name: "battery", price: 5000 },
//   { name: "radio", price: 3000 },
// ];
// let output = product
//   .map((value, index) => {
//     return value.price;
//   })
//   .reduce((previous, current) => {
//     return previous + current;
//   });
// console.log(output);

// (value, index) => {
//   if (value === price) {
//     return true;
//   } else {
//     false;
//   }
// },

// let list = ["ram", "hari", "Riyaz", "Nita", "Ramesh"];
// let output = list.sort((a, b) => {
//   return a.length - b.length;
// });
// console.log(output);

// convert object into array

// let info = {
//   name: "riyaz",
//   age: 50,
//   location: "ktm",
// };

// // let output = Object.keys(info);
// // let output = Object.values(info);
// let output = Object.entries(info);

// console.log(output);//[ [ 'name', 'riyaz' ], [ 'age', 50 ], [ 'location', 'ktm' ] ]

// //convert array into object

// let list = [
//   ["name", "riyaz"],
//   ["age", 50],
//   ["location", "ktm"],
// ];

// let output = Object.fromEntries(list);
// console.log(output);
