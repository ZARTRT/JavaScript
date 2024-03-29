#### 一、垃圾回收机制

JavaScript找出那些不再继续使用的变量，然后释放其所占用的内存，辣鸡回收器会按照固定的时间间隔周期性地执行这一操作

##### 1.垃圾回收方式1:引用计数

<img src="垃圾回收机制.assets/引用计数.png" alt="引用计数" style="zoom: 33%;" align="left" />

##### 2.垃圾回收方式2:标记清除

标记清除指的是当变量进入环境时，这个变量标记为 “进入环境”；而当变量离开环境时，则将其标记为“离开环境”，最后，垃圾回收器完成内存清除工作，销毁并回收那些被标记为 “离开环境”的值所占用的内存空间

```
function foo() {
	var a =10; // 被标记进入环境
	var b = 'hello'; // 被标记进入环境
}
foo() // 执行完毕， a 和 b 被标记离开环境，内存被回收
```



###### 2.1执行环境

执行环境定义了变量或函数有权访问的其他数据，决定了它们各自的行为。每个**执行环境**都有一个与之关联的**变量对象** (variable objiect)，环境中定义的所有变量和函数都保存在这个对象中

**全局执行环境**是最外围的一个执行环境。根据ECMAScript实现所在的宿主环境（浏览器、node）不同，表示执行环境的变量对象也不一样。例如，在WEB浏览器中，与全局执行环境关联的变量对象是windows对象，而在Node中，全局执行环境是Global对象。某个执行环境中的代码全部执行完毕后，该环境被销毁，里面的所有变量和函数也一起被销毁，但是在全局环境中直到应用程序被退出、网页关闭、浏览器关闭时才会被完全销毁。

**局部执行环境**每个函数都有自己的执行环境。当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。ECMAScript程序中的执行流正是由这个方便的机制控制着。其实，当浏览器第一次加载js文件时，它默认就是进入的全局执行环境。如果在全局环境中调用了一个函数，那么执行流就会进入函数当中，创建一个新的执行环境并且把这个环境添加到执行栈的顶部。

#### 二、V8内存管理机制:新生代和老生代

V8是开源高性能JavaScript引擎，被用于谷歌，安卓，node等大型项目

##### 1.新生代垃圾回收

1.1 From为使用空间，to为闲置空间

1.2 垃圾回收机制会处理闲置的对象

<img src="垃圾回收机制.assets/新生代垃圾回收.png" alt="新生代垃圾回收" style="zoom: 35%;" align="left"/>

##### 2.老生代垃圾回收

老生代有两种回收方式

2.1标记清除

<img src="垃圾回收机制.assets/老生代标记清除.png" alt="老生代标记清除" style="zoom:40%;" align="left"/>

2.2 标记合并

<img src="垃圾回收机制.assets/老生代标记合并.png" alt="老生代标记合并" style="zoom:40%;" align="left" />