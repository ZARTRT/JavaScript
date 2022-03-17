/* 
一、什么是原型链
1.JavaScript是面向对象的，每个实例对象都有一个__proto__属性，该属性指向它的原型对象。
2.这个实例对象的构造函数有一个原型属性prototype,与实例的proto属性指向同一个对象。
3.当一个对象在查找一个属性的时候，自身没有就会根据__proto__向它的原型进行查找，如果都没有，则向它的原型的原型继续查找，
直到查到Object.prototype.proto_为null,这样也就形成了原型链。

二、个人对原型指向理解
1.每一个js对象（null除外）都和另一个对象关联，这“另一个对象”就是原型，每一个对象都是从原型继承属性。注意对象直接访问prototype会报错。
2.每个对象其实都是被内置对象new出来的，那么它们就会有属于自己的构造函数，而对应的构造函数就会有自己的原型
（举例：Function.prototype、String.prototype、Number.prototype ...），但有一些小区别：
    2.1 函数作为普通方法，那它的原型就是Function.prototype
    2.2 函数作为构造方法，那它的原型就是构造方法名.prototype
    2.3 内置Object的原型就直接向所有原型的始祖Object
3.所有构造函数（不区分内置）的__proto__指向Function.prototype
4.对象的继承，子函数的prototype也是父函数的prototype，用一段代码来说明
    // 原型继承
    Function.prototype.extend = function(superClass) {
        // Object.create()将父类的原型交给了子类，属性方法都在父类原型上，不在子类实例。
        this.prototype = Object.create(superClass.prototype);
        this.prototype.constructor = this;
    }
    // 实例
    // Shape - 父类(superclass)
    function Shape() {
    this.x = 0;
    this.y = 0;
    }

    // 父类的方法
    Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
    };

    // Rectangle - 子类(subclass)
    function Rectangle() {
    Shape.call(this); // call super constructor.
    }

    // 子类续承父类
    Rectangle.prototype = Object.create(Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;

    var rect = new Rectangle();

    console.log('Is rect an instance of Rectangle?',
    rect instanceof Rectangle); // true
    console.log('Is rect an instance of Shape?',
    rect instanceof Shape); // true
    rect.move(1, 1); // Outputs, 'Shape moved.'

*/
