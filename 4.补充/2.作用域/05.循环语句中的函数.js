// var声明的 依次输出3、3、3
for (var i = 0; i < 3; i++) {
    setTimeout(() => alert(i))
}

// let声明的 依次输出1、2、3
for (let i = 0; i < 3; i++) {
    setTimeout(() => alert(i))
}

// var声明 依次输出1、2、3，通过立即执行函数(自执行函数)可得到解决
for (var i = 0; i < 3; i++) {
    (function(value){
        setTimeout(() => alert(value))
    })(i)
}