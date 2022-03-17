// 原型上的属性被所有实例共享，如果属性值是对象类型，则某个实例更改后会影响其他实例，这往往不是实际所期望的效果。
function Person() {}
Person.prototype = {
  name: "John",
  arr: [],
};
const p1 = new Person();
const p2 = new Person();
p1.name = "Tom";
p1.arr.push("hello");
// p1.__proto__.name = "Jack" // 可通过找到实例的原型去修改
console.log(p2.name); // 'John' 原型上的原始类型属性和函数不可通过实例被修改
console.log(p2.arr); // 'hello' 原型上的引用类型可通过实例被修改
