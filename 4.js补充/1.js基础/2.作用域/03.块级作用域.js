// 1.优先使用const
// 2.如果之后会改变，则使用let
// 3.避免使用var

// 块级作用域是es6中提出
// 块级作用域：只能在当前作用域中访问
// let y = 1;
// if(true){
//     var x = 2;
//     let y = 2;
// } 
// console.log(x); // 2
// console.log(y); // 1

// 块级作用域：禁止重复声明
// var x = 1;
// let x = 2; // SyntaxError

// 在不同作用域中可以重复声明
// var x = 1;
// if (x) {
//     let x = 1;
// }

// 块级作用域：const声明
// 使用const声明的原始类型，是常量，之后不能更改，不然会报类型错误。
// 使用const声明的对象类型变量，变量本身无法赋值为其他类型，但它的属性可以修改
// const x = 1;
// x = 2; // TypeError
// const x ={};
// x.age =23;

// 暂时性死区
// 所谓的提升，就是js引擎运行语句块前，会提前把语句块中的变量先放入到了内存当中
var x = 1;
if (true) {
    // 之所以报错是因为引擎已经知道下面有定义过x了，所以提升的行为是存在的
    // ReferenceError: Cannot access 'x' before initialization
    console.log(x);
    let x = 2;
}

