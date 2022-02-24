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
    var local = 1; // 标记+1
    function bar() {
      local++;
      return local;
    }
  //   window.bar = bar;
    global.bar = bar;
  }(); // 当foo执行完毕以后local变量并没有被回收，因为后面的bar函数在引用执行它
  console.log(bar()); // 执行完毕 标记-1


