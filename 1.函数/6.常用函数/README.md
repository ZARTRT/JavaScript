# 常用函数

##### 一、缓存函数

<img src="常用函数.assets/实现原理.png" alt="实现原理" style="zoom:50%;" align="left"/>

需要大量重复计算，或者大量计算又依赖于之前的结果

![缓存函数](常用函数.assets/缓存函数.png)

```js
let memoize = function (func) {
            let cache = {};
            return function (key) {
                if (!cache[key]) {
                    cache[key] = func.apply(this, arguments);
                }
                return cache[key];
            }
        }

let add = (a, b) => a + b;
        let calculate = memoize(add);
//代码不完全具有代表性
        console.log(calculate(10, 20));
        console.log(calculate(20, 30));
```



##### 二、柯里化函数（curry）

<img src="常用函数.assets/柯里化函数.png" alt="柯里化函数" style="zoom:50%;" align="left"/>

![柯里化链](常用函数.assets/柯里化.png)

![柯里化函数代码](常用函数.assets/柯里化函数代码.png)

![image-20210409140251207](常用函数.assets/image-20210409140251207.png)

##### 三、Lodash

<img src="常用函数.assets/image-20210409140345642.png" alt="image-20210409140345642" style="zoom: 50%;" align="left"/>

<img src="常用函数.assets/image-20210409140719354.png" alt="image-20210409140719354" style="zoom: 50%;" align="left"/>

四、偏函数