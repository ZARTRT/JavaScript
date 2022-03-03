// 1.普通创建
// N个对象，重复创建
// var obj = {
//   name: "zj",
//   age: 19,
// };
// var obj1 = {
//   name: "zj",
//   age: 19,
// };

// 2.工厂模式
// 解决了重复，但出现对象识别问题：对象是一个类的实例，这里obj2和3都不是实例。不是一个面向对象的一个思想
// function Obj(name, age) {
//   return {
//     name: name,
//     age: age,
//     sayName: function (){
//         alert(this.name)
//     }
//   };
// }
// var obj2 = Obj('zj',12);
// var obj3 = Obj('lx',13);

// 3.构造函数模式
// 构造函数实例化后自带属性指向，同样也是Object的实例.基本上实现了“对象是一个类的实例”的概念
// function Obj(name, age) {
//       this.name = name,
//       this.age = age,
//       this.sayName = function (){
//           alert(this.name)
//       }
//   }
//   var obj = new Obj('zj',12);
//   var obj1 = new Obj('zj1',121);
//   console.log(obj.constructor === Obj); // true
//   console.log(Obj.prototype.constructor === Obj);  // true
//   console.log(obj instanceof Obj);  // true
//   console.log(obj instanceof Object);  // true
// // 同样实例化，但不同实例上的同名函数不同，那这个与我们预期向违背。这个可以通过原型的方式来解决
//   console.log(obj.sayName === obj1.sayName); // false

// 4.原型模式
function Person(){}

// Person.prototype.name = 'John';
// Person.prototype.age = 13;
// Person.prototype.sayName = function(){
//     console.log(this.name);
// }

// 简化的写法会覆盖prototype，也就是说如下people.constructor === Person 结果为false
// 解决方案：重新定义constructor
// Person.prototype = {
//     // constructor: Person,
//     name: 'zj',
//     age: 16,
//     sayName: function(){
//         console.log(this.name);
//     }
// }
// var people = new Person();
// var people2 = new Person();
// console.log(Person.prototype.isPrototypeOf(people)); // true
// console.log(Object.getPrototypeOf(people) == Person.prototype); // true
// console.log(people.constructor === Person); // false

