// // 手写一个extend 组合继承原型方法
Function.prototype.extend = function (superClass){
    // this.prototype = Object.create(superClass.prototype);
    this.prototype = Object.create(superClass);
    this.prototype.constructor = this
}
function Persona(name, age){
    this.name = name;
    this.age = age;
}
Persona.prototype.func= function(){
    console.log(123);
    return this
};
function Personb(name,age){
    Persona.call(this,name,age)
}
Personb.extend(new Persona())
let c = new Personb('zhangjoa',18)
console.log(c.name);
console.log(c.func());


// // 替换原型
// let wang = {
//     house: {
//         address: '东京',
//         price: 10000000
//     },
//     car: {
//         brand: '劳斯奈斯',
//         price: 5000000
//     }
// }

// function Zhanan(gfs){
//     this.gfs = gfs
// }
// Zhanan.prototype.huaQian = function () {
//     console.log('我是渣男,我很会哄女孩子吃6块钱麻辣烫...');
// }
// // Zhanan.prototype = wang;

// let sicong = new Zhanan(['李静', '王泽伟', '五菇凉']);
// console.log(sicong);

// // 组合继承
// function classA(name) {
//     this.name = name;
// }
// classA.prototype.getName = function() {
//     return this.name;
// }
// function classB(name) {
//     classA.call(this,name);
// }
// classB.prototype = new classA();
// classB.prototype.constructor = classB;

// var bb = new classB('world');
// var cc = new classB('yes');
// console.log(bb.name);    //world
// console.log(cc.getName()); //yes

