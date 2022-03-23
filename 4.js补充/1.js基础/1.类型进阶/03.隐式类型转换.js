// 一、类型转换场景（隐式转换）
// 1.转字符串
// 经常出现在+运算中，并且其中有一个操作数不是数值类型
let a = 4 + "px" + 5;
console.log(a);
// 2.转数值
// 经常出现在数学运算中，表示连接字符串的+运算符除外
let b = "123";
console.log(+b, -b);
// 3.转布尔
// 经常出现在if语句、逻辑运算中
let s = "abc";
if (s) {
  console.log(s);
}
console.log(!!s);

// 二、类型转换场景：相等性（隐式转换）
// ==运算符会有类型转换，===不会有类型转换。所以一般推荐使用 ===
console.log(null == undefined); // es明确规定两者相等
console.log("0" == 0); // 在比较之前，字符串转换为数值
console.log(0 == false); // 在比较之前，布尔转换为数值
console.log("0" == false); // 在比较之前，字符串和布尔都转换为数值
