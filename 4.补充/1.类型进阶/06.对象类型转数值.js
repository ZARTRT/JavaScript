let obj = {
  name: "zjj",
  age: 18,
};
// 两者都是一样，先调用valueOf，如果是原始值就直接返回。否则，调用toString，如果是原始值就直接返回。
console.log(+obj);
console.log(Number(obj));

// 验证
// Object.prototype.valueOf = function () {
//   return "调用valueOf";
// };
// Object.prototype.toString = function () {
//   return "调用toString";
// };

// // console.log(Number({ x: 1, y: 2 }));
// console.log( + { x: 1, y: 2 });
