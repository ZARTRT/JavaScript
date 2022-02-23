// 获取对象原型的两种方法
// Object.getPrototypeOf()
let o = {};
console.log(Object.getPrototypeOf(o) === Object.prototype);
let a = new Array();
console.log(Object.getPrototypeOf(a) === Array.prototype);

let p = {x:1};
let q = Object.create(p);
console.log(Object.getPrototypeOf(q) ===p);

// __proto__
let c ={};
console.log(c.__proto__);