/* 
Object.setPrototypeOf()，不怎么推荐，因为性能没有Object.create()好。
Object.setPrototypeOf()接受两个参数，第一个为子类对象，第二个为父类对象。注意，第二个对象不能是null或者数字，否则会报错。 
*/

// Object.setPrototypeOf()
// let o = {x:1};
// let a = {};
// Object.setPrototypeOf(a,o)
// console.log(Object.getPrototypeOf(a) === o);

// Object.create()
// 注意，使用Object.create(null)创建的对象没有原型
let o = {x:1};
let a = Object.create(o)
console.log(Object.getPrototypeOf(a) === o);
console.log(a.x);