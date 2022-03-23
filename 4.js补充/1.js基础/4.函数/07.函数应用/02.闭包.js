//

/* 
什么是闭包？
闭包是指访问了另外一个作用域中的变量的函数
*/

!function foo() {
  var local = 1;
  function bar() {
    local++;
    return local;
  }
//   window.bar = bar;
  global.bar = bar;
}();
console.log(bar());

/* 
闭包应用
闭包可以阻止变量被垃圾回收
*/

!function foo() {
    var local = 1; 
    function bar() {
      local++;
      return local;
    }
  //   window.bar = bar;
    global.bar = bar;
  }(); // 当foo执行完毕以后local变量并没有被回收，因为后面的bar函数在引用执行它
  console.log(bar()); // 执行完毕

/* 
闭包应用示例
*/
// 示例1
function fn() {
    for (var i= 0; i < 10; i++) {
       setTimeout(()=> {
           console.log(i); // console执行之前，for已经执行完毕了
       },0)
    }
}
fn() // 输出9个10
// 示例2
function fnu() {
    for (var i= 0; i < 10; i++) {
       function fnc(i) {
        setTimeout(()=> {
            console.log(i); // console执行之前，for已经执行完毕了
        },0)
       }
       fnc(i)
    }
}
fnu() // 依次输出不同参数
// 示例3
// 上面fnu 可以理解为下面的步骤
function fnc(i) {
    setTimeout(()=> {
        console.log(i); // console执行之前，for已经执行完毕了
    },0)
}
function fnu() {
    for (var i= 0; i < 10; i++) {
       fnc(i)
    }
}
fnu() // 依次输出不同参数


