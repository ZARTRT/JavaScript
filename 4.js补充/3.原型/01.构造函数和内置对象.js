// prototype：只有函数function才有，也只有当函数function 作为构造函数使用时才有用
// constructor：只有当存在prototype时，才有constructor
// __proto__ 每个对象上都有

// 构造函数
function Fun(age){
    this.age = age;
}
var zj = new Fun(123)
console.log(Fun.prototype);
console.log(Fun.prototype.__proto__);
console.log(zj.__proto__ === Fun.prototype);
console.log(Fun.__proto__ === Function.prototype);
console.log(String.__proto__ === Function.prototype);
console.log(Number.__proto__ === Function.prototype);
console.log(Array.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);

// 以下都是内置构造函数
// var x = new Function('x','return x+3')
// console.log(x);
// console.log(x.prototype);
// console.log(x.__proto__);

// var x = new Object()
// x.age = 1
// console.log(x);
// console.log(Object.prototype);
// console.log(x.__proto__);

// var myCars = new Array();
// myCars[0] = '宝马';
// myCars[1] = '奔驰';
// myCars[2] = '沃尔沃';
// console.log(myCars);
// console.log(myCars.prototype);
// console.log(myCars.__proto__);

// var x = new Number(1)
// console.log(x);
// console.log(x.prototype);
// console.log(x.__proto__);
// console.log(x.constructor.name);
// console.log(Number.prototype === x.__proto__);

// var x = new String('1')
// console.log(x);
// console.log(x.prototype);
// console.log(x.__proto__);


// 简写模式
// var func = function (params) {
// }
// function func (params) {
// }
// console.log(func.prototype);
// console.log(func.__proto__);
// var obj = {}
// console.log(obj.prototype);
// console.log(obj.__proto__);
// var num = 1 
// console.log(num.prototype);
// console.log(num.__proto__);
// var str = 'jj' 
// console.log(str.prototype);
// console.log(str.__proto__);
