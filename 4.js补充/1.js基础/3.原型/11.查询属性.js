// 查询属性会沿着对象的原型链一级一级往上查询，直到找到目标属性或者原型null的对象为止
function Person(){}
Person.prototype = {
    name:"John",
    age: 23
}
const p1 = new Person();
p1.from = 'China';
alert (pl.age) ; // 对象本身没有，就往对象的原型上找
alert (pl.from) ; // 对象本身有
alert (p1.toString); // 对象和对象原型上都没有，就往Object上找，直到null为止