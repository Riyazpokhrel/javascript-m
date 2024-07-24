// let multi = ["a","b","c"];
// let output = multi.map((value,index)=>{
//     //map method always return
//     return value * 2;

// });
// console.log(output);
// // use map method if both input and output are arrays and both input and outputs lenth are same.

// let num = [1,2,3];
// let output1 = num.map((value,index)=>{
//     //map method always return
//     return value * 9090909;

// });
// console.log(output1);
// //use map method if both input and output are arrays and both input and outputs lenth are same.


// let num = [1,3,4,5];
// let output1 = num.map((value,index)=>{
//     if (value %2 === 0){
//         return value * 0
//     }
//     else{
//         return value * 100
//     }
// })
// console.log(output);

// let name = ["my","name","is"];
// let output = name.map((value,index)=>{
//     return value.toUpperCase();
// })
// console.log(output);

// let name = ["r","a","m"];
// let output = name.map((value,index)=>{
//     if(index ===0){
//         return value.toUpperCase();
//     }
//     else{
//         return value;
//     }
// })
// console.log(output);


// // split => convert array into aray
// // join => covert array into string


// //split
// console.log("ramhari".split("a"));
// console.log("hari".split(""));
// //joipn
// console.log([ 'h', 'a', 'r', 'i' ].join(""));


// // console.log("my name is Riyaz pokhrel".split(" "));

// //filter

// let arr = ["a","b","c"]
// let output = arr.filter((value,index)=>{
//     if (value === "a"){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(output);



// [1,21,32,43,34,50,54,76,54,]

// let num = [1,21,32,43,50,54,76,54,];
// let output = num.filter((value,index)=>{
//     if (value > 50){
//         return true
//     }
//     else{
//         return false
//     }
// });
// console.log(output);

// let name = ["ram","hari","sita"]
// let output = name.filter((value,index)=>{
//     if (value.length > 3){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(output);



// //find
// //it returns first match

// let arr = [1,2,3,4];
// let output = arr.find ((value,index)=>{
//     return true;
// })
// console.log(output);

// let input = ["","ram","hari",0,2,1,null,undefined,true,false];

// let output = input.filter(Boolean);

// console.log(output);  // [ 'ram', 'hari', 2, 1, true ]


// // includes
// // includes only true or false

// let list = ["ram","anish","harry"];
// console.log(list.includes("ram")); //true


// push => push value to last element of an array
// pop => remove the last element of the array
// unshift => push value to first element of an array
// shift => remove first ele ment of an array

// let list = [1,2,3];
// // list.push(5);
// // list.pop();
// // list.unshift("riyaz");
// // list.shift();

// console.log(list);


// sort

// let list = ["a","v","r","g","r"]
// let output = list.sort();
// console.log(output);


// //number sort

// let list = [1,23,4,,8,4,10];
// let output = list.sort((a,b)=>{
//     return a - b;
// });
// console.log(output);

// // syntax: reduce(()=>{},0)

// let list = [1,2,3,4,5];
// let output = list.reduce((previous,current)=>{
//     return previous + current
// },0)
// console.log(output);




// // find the sum of all even elements of an array
// let num = [1,4,3,6,7,8,5,2];
// let output = num.filter((value,index)=>{
// if (value %2 === 0){
//     return true
// }
// else{
//     return false
// }
// })
// console.log(output);



// let output1 = output.reduce((previous,current)=>{
//     return previous + current;
// })
// console.log(output1);




