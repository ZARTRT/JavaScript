// delete运算符只能删除对象的自身属性，不能删除从原型继承而来的属性。

function Person() {}
Person.prototype = {
  name: "John",
  age: 23,
};
const p = new Person();
p.fullName = "Tom";
console.log(p.name, p.fullName); // 'John' 'Tom'
delete p.name;
delete p.fullName;
console.log(p.name, p.fullName); // 'John' undefined