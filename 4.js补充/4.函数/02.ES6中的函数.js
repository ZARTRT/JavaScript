/* 
函数内部有两个不同的方法：[[Call]] 和[[constructor]]。
当使用普通方式调用函数时，[[Call]]会被执行。
当使用构造函数调用时，[[Constructor]]方法会被执行。

那么，当作为构造函数执行了[[Constructor]]会创建一个new.target的新对象，作为this取值型函数体。
拥有Constructor的函数才能被称为构造函数，所以并不是所有函数都有Constructor这个方法，这也意味着为什么有的函数不能用new的方式去调用
*/