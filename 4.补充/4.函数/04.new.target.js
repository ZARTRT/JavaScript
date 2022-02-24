// 当以构造函数的形式调用函数时，new.target指向的是构造函数本身。
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error("You must use new with Person");
  }
}
let person = new Person("John");
// let person2 = Person("John"); // Error
