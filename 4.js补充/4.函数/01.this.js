// 1.普通调用
// function fun() {
//   console.log(this); // window
// }
// fun();

// 2.对象方法调用
// let obj = {
//   fun() {
//     console.log(this); // obj
//   },
// };
// obj.fun();

// 2.1小坑，这里以为调用func以后，函数体func里面的this会是obj，其实不是。
// 解决方案：call和apply
// let obj = {
//   fun() {
//     console.log(this); // obj
//     function func() {
//       console.log(this); // window
//     }
//     // func.call(this)
//     func();
//   },
// };
// obj.fun();

// 3.call和apply调用
// let obj = {
//   fun() {
//     console.log(this); // obj
//     function func() {
//       console.log(this); // obj
//     }
//     func.call(this) // this指向obj
//   },
// };
// obj.fun();

// 构造函数调用
// 构造函数默认返回的是this，构造方法默认返回的是undefined
// 下面是作为构造函数new了一个实例，this就代表实例对象
function Person(name) {
    this.name = name; // people
    // 其实在这里是可以省略不写的，因为默认就是return this。this就是people，people就相当于Person的返回值。如果没有显示的返回值（实例化Person） 默认返回this
    return this; 
}
const people = new Person('Jack'); 
console.log(people.name); // 'Jack'

// 下面Person1是作为构造函数给定了返回值是obj，this也代表实例对象，只是返回值不同
let obj = {
    name:'John',
}
function Person1() {
    this.name = 'Tom';
    return obj; 
}
const people1 = new Person1();
console.log(people1.name); // 'John'

// 下面是作为普通方法，this是Window
function fn() {
    console.log(this); // window
    // return undefined; // 这里也可以省略不写
}
let func = fn(); 
console.log(func); // undefined


