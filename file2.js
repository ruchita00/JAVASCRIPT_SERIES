// var x = 2;
// if (true) {
//   //block -scoping -global scoping
//   let x = 3;
//   console.log(x);
// }
// console.log(x);

//scoping: area of influnece of certion condtion

//global scope: thouse vara=iables available entire page

// very imp :var is functionsl scope

//let are local block level scope
// function sayHello() {
//   let y = 2;
//   if (true) {
//     let y = 3;
//     console.log(y);
//   }
//   console.log(y);
// }
// sayHello();

//with var let we can reinitilaization of value

// const x = 2;
// x = 3;
// console.log(x);

//const we can not reinitiazaed value

// question:  what is the type of error i will get
// ReferenceError;

// when we get type error : when the datatype doesnt match
// ReferenceError : when the js is trying to access something which is not available in the memory

// var y = 3; //globally scoped
// function abc() {
//   console.log(y);
//   var x = 3;
// }
// console.log(x);

var x = 2;
var isAvailable = 3;
if (isAvailable >= 3) {
  var x = 3;
}
console.log(x);
// output:2
// cannot redeclare using let but reinitialize

//const cannot leave const empty

let x;
console.log(x);

x = 3;
