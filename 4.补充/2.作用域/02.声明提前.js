// 一、 var 声明变量提前,
// 在函数中所有通过var声明的变量会提升到函数体顶部，
// 在函数中所有声明的函数会提升到函数体顶部，优先级高于变量
// var x = 5;
// function fn(){
//     // undefined
//     console.log(x);
//     var x = 10;
// }
// fn();

// 二、函数声明提前
// function fn() {
//   x();
//   function x() {
//     console.log(1);
//   }
// }
// fn();
// 函数表达式声明的函数不会提前
// function fnc() {
//   x();
//   var x = function () {
//     console.log(1);
//   }
// }
// fnc();

// 三、函数声明提前高于变量声明提前
var double = '111';
function double(num) {
  return (num * 2);
}
console.log(typeof double); // string
