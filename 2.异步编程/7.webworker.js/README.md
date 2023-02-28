##### 1.webworker

- 它是一个webAPI，浏览器提供的一个可供js运行的环境
- 独立在主线程的后台线程中（worker线程）
- 通过webworker可以实现多个线程运行js
- 关键点：性能考虑，分担主线程的压力

##### 2.主线程与worker线程之间的通信

<img src="webworker.assets\image-20220316112534340.png" alt="image-20220316112534340" style="zoom: 50%;" align="left"/>

##### 3.webworker限制

- 与主线程脚本同源
- 与主线程上下文不同
  - 无法操作DOM
  - 不能执行alert等
- 不能读取本地文件

##### 4.webworker场景

- 为js解决了什么
  - js执行复杂运算的时候阻塞了页面的渲染
- 使用场景
  - 复杂运算
  - 渲染优化
  - 流媒体数据处理

##### 5.哪些项目依赖了webworkify

flv.js、pica、roslib...

##### 6.什么是Browsersync

Browsersync能让浏览器实时、快速响应您的文件更改（html、js、css、sass、less等）并自动刷新页面。更重要的是 Browsersync可以同时在PC、平板、手机等设备下进项调试。有了它，您不用在多个浏览器、多个设备间来回切换，频繁的刷新页面。更神奇的是您在一个浏览器中滚动页面、点击等行为也会同步到其他浏览器和设备中，这一切还可以通过可视化界面来控制

##### 7.技巧

计算代码运行时间

console.time('tag');console.timeEnd('tag');