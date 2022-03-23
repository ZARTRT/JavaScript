// let obj = {
//   name: "zjj",
//   age: 18,
// };
// console.log(obj.toString());
// 这里需要区分隐式的''+和String()，它们内部调用的方法一样，但是顺序不一样
// 先调用valueOf，如果是原始值就直接返回。否则，调用toString，如果是原始值就直接返回。否则，报错TypeError
// console.log("" + obj);
// 先调用toString，如果是原始值就直接返回。否则，调用valueOf，如果是原始值就直接返回。否则，报错TypeError
// console.log(String(obj));

// 验证
Object.prototype.valueOf = function () {
  return "调用valueOf";
};
Object.prototype.toString = function () {
  return "调用toString";
};

console.log(String({ x: 1, y: 2 }));
// console.log("" + { x: 1, y: 2 });

// Date对象的特殊场景
Date.prototype.valueOf = function () {
  return "调用valueOf";
};
Date.prototype.toString = function () {
  return "调用toString";
};

let d = new Date();
console.log(String(d));
console.log("" + d);
