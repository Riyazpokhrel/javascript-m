//scope

// {} = block

// {
//   let a = 10;
//   console.log(a);
// }
// console.log(a);s

// // // //A variable will be knoen within its block mfrom the line where uit is defined.

// {
//   let a = 1;
//   {
//     a = 10;
//   }
//   console.log(a);
// }

//whene a variabel is called ,first it is searched in its own block, if variablke is not find in the block,then it will be searched in another parents block

{
  let a = 23;
  {
    let a = 32;
    console.log(a);
  }

  console.log(a);
}
// A variable can not be defined twice (redefined) in same block. but we can redefine same variable in different block
