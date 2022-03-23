// 判断obj(变量)是否是给定的实例
// 防止漏写new的尴尬，代码更具有健壮性
function Person(name) {
  if (this instanceof Person) {
    this.name = name;
  } else {
    throw new Error("You must use new with Person");
    7;
  }
}
let person = new Person("John");
let person2 = Person("John"); // Error

// console.log(Person.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
