// let obj1 = {
//   method() {
//     return "abc";
//   },
// };

// let obj2 = {
//   method() {
//     return super.method();
//   },
// };

// Object.setPrototypeOf(obj2, obj1);
// console.log(obj2.method());

// let a = new Array()
// console.log(a)
// console.log(a.length)
// console.log(a.__proto__ === Array.prototype)

let b = new Object();
b.name ="zhaj";
b.age = 18;
console.log(b)
console.log(b.length)
console.log(b.__proto__ === Object.prototype)
