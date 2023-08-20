// 异步编程方法：回调函数、事件订阅与发布、Promise、generator函数、async函数

// 异步编程之回调函数

// 未添加回调函数
// function sum(x,y){
//     console.log(1)
//     setTimeout(function(){
//         console.log(2)
//         var resault = x + y;
//         return resault; 
//     },100)
//     console.log(3)

// }
// console.log(sum(10,20)) 

// 已添加回调函数
function sum(x, y, callback) {
    console.log(1);
    setTimeout(function() {
        console.log(2);
        var result = x + y;
        callback(result); // Pass the result to the callback
    }, 100);
    console.log(3);
}

sum(10, 20, function(result) {
    console.log(result); // Output the result when the async operation is done
});

