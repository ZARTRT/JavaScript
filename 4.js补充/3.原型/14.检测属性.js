// 可以通过in、hasOwnProperty、propertyIsEnumerable等方法来检测属性是否存在。
// in
let o = {x:1}
console.log('x' in o); // true
console.log('y' in o); // false
console.log('toString' in o); // true
// hasOwnProperty，检测是否是对象自身的属性，不检测原型继承下来的
let o = {x:1}
console.log(o.hasOwnProperty('x')); // true
console.log(o.hasOwnProperty('y')); // false
console.log(o.hasOwnProperty('toString')); // false
// propertyIsEnumerable，是hasOwnProperty的增强版，是自身属性并且是可枚举时才返回true
let o = {x:1}
console.log(o.propertyIsEnumerable('x')); // true
console.log(o.propertyIsEnumerable('y')); // false
console.log(Object.prototype.propertyIsEnumerable('toString')); // false

// 检测属性：不容易被察觉的坑
let o = {x:1}
// 判断x是否是o的属性，在示例情况下看没有什么问题。但如果x值为0或者false时，if语句内的内容将不会被执行。这是就需要使用hasOwnProperty方法
if (o.x) {
    console.log("niubi");
}