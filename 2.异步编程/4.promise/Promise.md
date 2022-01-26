# Promise

##### 1.术语

![image-20210419144827649](Promise.assets/image-20210419144827649.png)

##### 2.要求

2.1 `promise`的状态被改变以后就不能再改变了

![image-20210419145157221](Promise.assets/image-20210419145157221.png)

2.2  `promise`要有一个`then`方法，而`then`方法需要有一定的条件。

​	2.2.1 `then`的参数是两个函数，也可以不是函数（那会被直接忽略掉）

​	2.2.2 `then`可以通过链式被多次调用，每次都会返回一个`promise`实例，而这个实例里必须有`then`方法

​	2.2.3 `promise`实例里面每次被注册的`onFulfilled`和`onReject`将会按照被注册的顺序一一被执行，最后`then`方法会返回一个`promise`（值和状态）![image-20210419151404008](Promise.assets/image-20210419151404008.png)

2.3 `promise`解析过程（这里很复杂，我没有空写）

##### 3.ES6 Promise API

3.1 静态方法

​	第一组，相当于直接指定了`Promise`的状态为成功

​	第二组，相当于直接指定了`Promise`的状态为失败

​	第三组，当所有的`Promsise`状态为成功才返回成功，只要其中一个状态为失败，那最后就返回失败

​	第四组，当所有的`Promsise`状态发生改变以后，不管成功还是失败最后都返回成功

​	第五组，返回的结果以完成最快的`promise`的状态为准

![image-20210419153645013](Promise.assets/image-20210419153645013.png)

3.2 `Promise`实例方法

![image-20210419154457986](Promise.assets/image-20210419154457986.png)

3.1 注意点

![image-20210419155002159](Promise.assets/image-20210419155002159.png)