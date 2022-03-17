// 严格模式：处理看似正常，但实际是有问题的代码
// "use strict";

// 数据类型分为两种
// 1.原始类型：string、number、boolean、null、undefined、symbol
// 2.引用类型：Object（Function、Array、Object）

// 一、原始类型
// 1.原始类型的值无法修改
// 字符串中所有的方法返回的都是新字符串，并不会修改原来的字符串。
// 示例一
var a = "abc";
a[1] = "d"; // 在严格模式会报语法错误
console.log(a);
// 示例二
var s = "ABC";
s.toLowerCase(""); //并不会修改s的值
let ss = s.toLowerCase(""); //返回新字符串
console.log(s);
console.log(ss);
// 2.比较原始类型是否相等，是比较他们的值
// 示例一
var n1 = 123;
var n2 = Number(123);
console.log(n1 === n2); // true
// 示例二
var s1 = "abc";
var s2 = "ab c";
console.log(s1 === s2); // false

// 二、对象（引用）类型
// 1.对象类型的值是可以修改的
// 示例一
var o = { x: 1 };
o.x = 2;
o.y = 3;
console.log(o); //{x: 2, y: 3}
delete o.x;
console.log(0); //{y: 3}
// 示例二
var arr = [1, 2, 2];
arr[1] = 4;
console.log(arr); // [4, 2, 2]
// 2.比较对象是否相等，不是比较它们的值。其次，对象的比较是在比较引用地址：当且仅当它们的引用的是同一个对象时，它们才相等
// 示例一
var obj1 = { x: 1 },
  obj2 = { x: 1 };
var arr1 = [1, 2, 3],
  arr2 = [1, 2, 3];
console.log(obj1 === obj2); // false
console.log(arr1 === arr2); // false
// 示例二
var obj3 = { x: 1 };
var obj4 = obj3;
obj4.y = 2;
console.log(obj3.y); // 2
console.log(obj3 === obj4); // true
