// 可以使用Object.getOwnPropertyNames、for/in、Object.keys来枚举对象的属性
function Person() {}
Person.prototype = {
  name: "John",
  age: 23,
};
const p = new Person();
p.fullName = "Tom";
Object.defineProperty(p, 'from', {
    value: 'China',
    enumerable: false
});

for (let key in p) {
    // if (Object.hasOwnProperty.call(p, key)) {
    //     const value = p[key];
    //     console.log(value);
    // }
    console.log(key); // ['fullName', 'name', 'age'] for in 检测对象自身和原型链上所有可枚举属性
}

console.log(Object.keys(p)); // ['fullName'] Object.keys 只会检测对象自身添加的枚举属性
console.log(Object.getOwnPropertyNames(p)); // ['fullName', 'from'] 只会检测对象自身可枚举和不可枚举属性


