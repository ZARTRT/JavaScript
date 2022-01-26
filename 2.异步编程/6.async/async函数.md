# async函数

##### 一、async

<img src="async函数.assets/image-20210421152158374.png" alt="image-20210421152158374" style="zoom:33%;" align="left"/>

![image-20210421160838490](async函数.assets/image-20210421160838490.png)

##### 二、await

2.1 await 在js的最外层可以用

2.2 await 在async可以用

2.3 await如果在普通函数里用会报语法错误

<img src="async函数.assets/image-20210421154916671.png" alt="image-20210421154916671" style="zoom: 33%;" />

2.4 等待一个promise对象的值

<img src="async函数.assets/image-20210421155411749.png" alt="image-20210421155411749" style="zoom: 33%;" align="left"/>

2.5 await的promise状态为rejected，后续中断

![image-20210421160638519](async函数.assets/image-20210421160638519.png)

##### 三、async实现原理

实现原理：Generator+自动执行器

![image-20210421172223894](async函数.assets/image-20210421172223894.png)

##### 四、应用

题目：按顺序打印多个文件

![image-20210421172516405](async函数.assets/image-20210421172516405.png)

![image-20210421173223190](async函数.assets/image-20210421173223190.png)