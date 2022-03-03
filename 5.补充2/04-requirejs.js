// requirejs 依赖前置，提前执行
// 举例常规基础写法
// 这里没有引入require.js文件
// a.js文件
define(['b'], function(b) {
    console.log(b);
    var Hello = function() {
        console.log("hello world");
    };
    return { // 接口对象
        Hello: Hello
    }
});

// b.js文件
define(function() {
    var name = "max"
    return {
        name: name
    }
})

// 执行文件
require.config({ // 配置
    paths: { 
        'a':'./a', // 模块短名称
        'b':'./b'
    }
});

require(['a','b'],function(a,b){
    console.log(a);
    console.log(b);
})