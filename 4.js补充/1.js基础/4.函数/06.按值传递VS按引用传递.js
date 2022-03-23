/* 
函数的参数，是按值传递还是按引用传递？
＞按值传递 (call by value)：函数形参的值是调用函数所传入实参的副本。
＞按引用传递 (call by reference）：函数形参的值是调用函数所传入实参的引用。
*/

// 基本类型按值传递
let a = "a";
function f(x) {
  x = "b";
}
f(a);
console.log(a); // 'a'
// 引用类型按值传递
let b = {
  x: 1,
};
function f1(x) {
  x.y = 2; // 传入引用地址的副本，给实参(b)和行参(x)引用的同一个对象添加新属性
}
f1(b);
console.log(b); // { x: 1, y: 2 };

let c = {
  x: 1,
};
function f2(x) {
  x = 2; // 传入引用地址的副本，将引用地址的副本修改为了2，并不影响外面的c对象引用地址的内容
}
f2(c);
console.log(c); // { x: 1};
