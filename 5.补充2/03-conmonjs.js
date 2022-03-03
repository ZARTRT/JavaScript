/* 
Commonjs
CommonJS规范加载模块是同步的，也就是说，加载完成才执行后面的操作。
Node.js主要用于服务器编程，模块都是存在本地硬盘中加载比较快，所以Node.js采用CommonJS规范。

commonJS规范分为三部分：module(模块标识）require(模块引用） exports(模块定义）
module变量在每个模块内部，就代表当前模块；
exports属性是对外的接口，用于导出当前模块的方法或变量；
require()用来加载外部模块，读取并执行js文件，返回该模块的exports对象。
*/
