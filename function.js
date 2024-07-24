// // define function,call function,pass value to function,function with return,arrow function

// // syntax of a function

// function (){}

// function sum(){
//     console.log("my name is riyaz");
// }

// sum();

// let sum = function(){
//     console.log("i am a function");
// }

// console.log("A");
// sum();
// console.log("B");

// // passs value to function

// let sum = function(a,b,c){
//     let sum = a+b+c
//     console.log(sum);
// }
// sum(12,2,4)

// // defoult value

// let sum = function(a,b,c=12){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
// sum(1,2)

// // function with return

// let sum = function(a,b){
//     let c = a + b;
//     return c;
// }
// let output = sum(6,4);
// console.log(output);

// // function without return,call normally : sum()
// // function with return,call by store it in variable like : let output = sum()

// let sum = () => {
//     // age = 1
//     if (age > 18){
// console.log("your age is greater than 18 ");
//     }
//     else{
//         console.log("your age is less than 18 ");
//     }

// };

// sum(age=12);
// sum(age=21);
// sum(age=33);

// let sum = (num1,num2) => {
//    let add = num1 + num2;
//     console.log(add);
// }
// sum(9,3);

// // javascript is a dynamic language because a variebles can be stored different value at a different time

// let name = "harry";
// name = "ram";
// console.log(name);
// name = true;
// console.log(name);

// javascript function can only return one value.
// let sum = () => {
//     return 1,2,3,4;
// };

// let a = sum();
// console.log(a);

// console.log(new Date());
// console.log(new Date().toDateString());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleDateString());

// call back function
let fun1 = () => {};
let fun2 = () => {};
//A callback function is a function passed into another funcction as an argument.

//calback functiojn example:map,reduce,filter

fun1(fun2);
//here callback function is fun1
//here fun1 is a higher order function

//higher oreder funcion
//A function which takes argument as function.
// A function which return another function is called highernorder function.
