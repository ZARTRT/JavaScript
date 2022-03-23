// 一、typeOf 检测变量数据类型，
// 缺点：在判断对象类型时有局限性，不知道具体是个什么样的对象数据类型

// 二、instanceof (obj instanceof constructor)是判断变量是否是给定的实例，
// 缺点：无法识别原始类型
let a = new Date();
console.log(a instanceof Date); //true
console.log("123" instanceof String); //false

// 三、constructor 可以检测变量的构造函数,也可以检测自定义类型，
// 缺点：有原型、多重继承时会失效
console.log({ x: 1 }.constructor.name); // Object
console.log([].constructor.name); // Array
console.log(new Date().constructor.name); // Date
console.log("".constructor.name); // String
console.log(true.constructor.name); // Boolean
console.log((12).constructor.name); // Number
// console.log(null.constructor.name); // TypeError
// console.log(undefined.constructor.name); // TypeError
function Foo() {}
console.log((new Foo()).constructor.name); // Foo

// 四、Object.prototype.toString.call(obj) 检测对象的内部属性，无法识别自定义对象的具体类型



