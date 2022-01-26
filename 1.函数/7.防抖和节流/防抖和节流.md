# 防抖和节流

##### 一、什么是防抖和节流

其实说的是函数的防抖和函数的节流

##### 二、防抖

<img src="防抖和节流.assets/image-20210409141522678.png" alt="image-20210409141522678" style="zoom: 50%;" align="left" />

<img src="防抖和节流.assets/image-20210409141637768.png" alt="image-20210409141637768" style="zoom:50%;" align="left" />

<img src="防抖和节流.assets/image-20210409141749117.png" alt="image-20210409141749117" style="zoom: 38%;" align="left" />

1.1 通过定时器来防抖

首先，箭头函数没有自己的this作用域，箭头函数的this来自于作用域链，同时箭头函数也没有argument，可以通过扩展运算符来绑定。

<img src="防抖和节流.assets/image-20210409152608001.png" alt="image-20210409152608001" style="zoom:150%;" />

##### 三、节流

<img src="防抖和节流.assets/image-20210409153135421.png" alt="image-20210409153135421" style="zoom:50%;" align="left"/>

![image-20210409162037366](防抖和节流.assets/image-20210409162037366.png)