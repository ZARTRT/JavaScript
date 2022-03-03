/*
seajs 是依赖就近延时加载,依赖模块是提前加载好的，只有在
require的时候才会去执行文件
 */

// 举例常规基础写法
// 这里没有引入sea.js文件
// a.js文件
define(function(require,exports,module) {
    var b = require(b)
    console.log(b);
    exports.Hello = function() {
        console.log("hello world");
    };
});

// b.js文件
define(function(require,exports,module) {
    var name = "max"
    exports.name = {
        name: name
    }
})

// 执行文件
seajs.config({
    paths: {
        'a':'./a',
        'b':'./b'
    }
});

seajs.use(['a','b'],function(a,b){
    console.log(a);
    console.log(b);
})