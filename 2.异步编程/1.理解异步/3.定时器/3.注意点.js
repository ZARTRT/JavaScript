// 如果有个定时器的任务为2s，前面同步代码执行时间为5s，那么定时器任务就不会如约执行。

const test = () => {
    let t = +new Date();
    while (true){
        if (+new Date() - t >= 5000) {
            break;
        }
    }
};
setTimeout(()=>{
    console.log(2);
},2000)
test();