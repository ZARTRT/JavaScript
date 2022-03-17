// 一、显示类型转换，可以使用代码。
// Boolean()、Number()、String()、Object()
Boolean([]); // true
Number("123"); // 123
String(123); // '123'
Object(3); // 等价 new Number(3)

// 二、显示类型转换：转字符串
// 转字符串还可以用toString()方法，它支持第二个参数，指定要转换的进制
null.toString(); // Error
undefined.toString(); // Error
(123).toString(); // '123'
false.toString(); // 'false'
// 转化二、八、十六进制
let n = 20;
console.log(n.toString(2));
console.log(n.toString(8));
console.log(n.toString(16));
// Number类型转换为字符串还有三个方法
// toFixed() toExponential() toPrecision()

// 三、显示类型转换：转数值
// String类型转换为数值还有两个全局方法
// parseInt()和parseFloat()
