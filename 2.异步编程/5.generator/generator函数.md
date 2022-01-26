# Generator函数

`Generator`可以理解为`生成器`，`Generator` 函数是 `ES6` 提供的一种异步编程解决方案，语法行为与传统函数完全不同。

##### 一、迭代器

![image-20210421101819218](generator函数.assets/image-20210421101819218.png)

##### 二、两个协议

![image-20210421102228085](generator函数.assets/image-20210421102228085.png)

##### 三、ES6的Generator函数

![image-20210421102620533](generator函数.assets/image-20210421102620533.png)

###### 3.1 yield关键字

![image-20210421102852348](generator函数.assets/image-20210421102852348.png)

###### 3.2 next方法

注意：如果遇到`yield*`不会暂停

![image-20210421102922488](generator函数.assets/image-20210421102922488.png)

###### 3.3 next参数

![image-20210421103236674](generator函数.assets/image-20210421103236674.png)

<img src="generator函数.assets/image-20210421103606517.png" alt="image-20210421103606517" style="zoom: 33%;" align="left"/>

###### 3.4 yield*（交出控制权）

`yield`生成器函数/可迭代对象

<img src="generator函数.assets/image-20210421104227124.png" alt="image-20210421104227124" style="zoom: 33%;" align="left"/>

<img src="/Users/zhangjian/Documents/study/2.异步编程/5.generator/generator函数.assets/image-20210421104307393.png" alt="image-20210421104307393" style="zoom: 38%;" align="left" />

###### 3.5 return方法

`return`方法可以提前结束遍历器

![image-20210421104809628](generator函数.assets/image-20210421104809628.png)

###### 3.6 throw方法

注意：`throw`方法遇到yield也可以停下来

![image-20210421105358183](generator函数.assets/image-20210421105358183.png)

##### 四、Generator函数的实现原理

###### 1.[协程](https://cnodejs.org/topic/58ddd7a303d476b42d34c911  )

<img src="generator函数.assets/image-20210421105739327.png" alt="image-20210421105739327" style="zoom: 33%;" align="left" />

##### 五、Generator函数应用

<img src="generator函数.assets/image-20210421112136942.png" alt="image-20210421112136942" style="zoom: 200%;" />

##### 六、[Thunk函数](http://www.ruanyifeng.com/blog/2015/05/thunk.html)

<img src="generator函数.assets/image-20210421143534557.png" alt="image-20210421143534557" style="zoom: 33%;" align="left"/>

![image-20210421145910562](generator函数.assets/image-20210421145910562.png)

##### 七、co

7.1 [co 函数库的含义和用法](http://www.ruanyifeng.com/blog/2015/05/co.html)：**函数库其实就是将两种自动执行器（Thunk 函数和 Promise 对象），包装成一个库。**使用 co 的前提条件是，Generator 函数的 yield 命令后面，只能是 Thunk 函数或 Promise 对象。

7.2 [co模块源码](https://github.com/tj/co)