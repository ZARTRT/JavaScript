/* 
首先检测对象是否允许添加属性，如果允许，
则在原始对象上创建属性或者更改已有的属
性。添加属性操作不会修改原型链。
*/
// 添加属性
function Person(){}
Person.prototype = {
    name:"John",
    age: 23
}
const p = new Person();
p.from = 'China'; // 只在p上添加了from属性，不会修改Person.prototype

// 添加属性：只读属性
function Person1(){}
Person1.prototype = {
    name:"John",
    age: 23
}
Object.defineProperty(Person1.prototype, 'from', {
    writable: false,
    value: 'China'
})
const p1 = new Person1();
p1.form = 'japan'; // 注意，在查找from属性时，是查找的整个原型链
console.log(p1.from);

// 添加属性：属性在原型上已存在
function Person2(){}
Person2.prototype = {
    name:"John",
    age: 23
}
const p2 = new Person2();
const p3 = new Person2();
p2.name = 'Joe';
console.log(p2.name); // 'Joe'，对象和对象原型上都有时，先查找对象自身的属性
console.log(p3.name); // 'John' ，对象自身没有但对象原型上有时，取对象原型上的属性

// 添加属性：setter
function Person3(){}
Person3.prototype = {
    firstname: "John",
    lastname: 'Tom',
    set fullName(value) {
        let names = value.split(' ');
        this.firstname = names[0];
        this.lastname = names[1];
    }
};
const p4 = new Person3();
p4.fullName = 'Nicholas Cage';
console.log(p4.firstname); // 'Nicholas'

