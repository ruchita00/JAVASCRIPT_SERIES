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
function sayHello() {
  let y = 2;
  if (true) {
    let y = 3;
    console.log(y);
  }
  console.log(y);
}
sayHello();

//with var let we can reinitilaization of value

const x = 2;
x = 3;
console.log(x);

//const we can not reinitiazaed value
