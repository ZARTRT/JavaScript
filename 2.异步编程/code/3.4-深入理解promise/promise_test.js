// 片段1
// promise 在new的过程中是同步的，then是异步的微任务
// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve();
//     console.log(2);
// });

// promise.then(() => {
//     console.log(3);
// });
// console.log(4);
// 最后输出的是1 2 4 3

// 片段2
// const promise = Promise.
//     resolve(1).
//     then(2).
//     then(Promise.resolve(3)).
//     then(console.log);
// 上述代码片段2的分解代码如下：
const promise1 = Promise.resolve(1); // resolve接受的参数会按照A+规范执行，返回的状态是fulfilled，值为1
const promise2 = promise1.then(2); // then参数如果是非函数直接忽略，并延续上一个promise的状态和参数
const promise3 = promise2.then(Promise.resolve(3)); // 同上
const promise4 = promise3.then(console.log); // console.log是函数，按照规范promise3的状态还是fulfilled，值为1，1就作为log的执行参数打印
console.log(promise4);

setTimeout(function () {
    console.log(promise4);
},4000)
