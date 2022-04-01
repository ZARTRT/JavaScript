var log = (function () {
  return global.console.log;
})();
/*
 ** 什么是代码质量
 ** 代码整洁--结构规整，没有漫长的结构--阅读好理解
 */

/*
 ** 策略模式的基本结构
 ** 目的：优化if-else
 ** 场景：当代码if-else分支过多时
 ** 例子（基本结构）：假设要编写一个计算器，有加减乘除，我们可以把一层层的if判断，变成这样的形式
 */
function strategy(type, a, b) {
  var Strategyer = {
    add: function (a, b) {
      return a + b;
    },
    minus: function (a, b) {
      return a - b;
    },
    division: function (a, b) {
      return a / b;
    },
  };
  return Strategyer[type](a, b);
}
let result = strategy("add", 1, 1);
log(result);

/*
 ** 状态模式
 ** 目的：优化if-else
 ** 场景：当代码if-else分支过多时
 ** 例子（基本结构）：为了减少if-else结构，将判断变成对象内部的一个状态，通过对象内部的状态改变，让其拥有不同的行为
 */
function stateFactory(state) {
  var stateObject = {
    _state: "",
    state: {
      state1: function () {},
      state1: function () {},
    },
    run: function () {
      return this.state[this._state]();
    },
  };
  stateObject._state = state;
  return stateObject;
}
stateFactory("state1").run();

/*
 ** 外观模式
 ** 目的：通过为多个复杂的子系统提供多个一个一致的接口
 ** 场景：当完成一个操作，需要操作多个子系统，不如提供一个更高级的
 ** 例子（基本结构）：我们在组织方法模块时可以细化多个接口，但是我们给别人使用时，要合为一个接口，就像去餐厅点餐（套餐）
 */
function Model1() {}
function Model2() {}
function use() {
  Model2(Model1());
}

/*
 ** 迭代器模式
 ** 目的：不访问内部的情况下，方便遍历数据
 ** 场景：当我们要对某个对象进行操作，但是又不能暴露内部
 ** 例子（基本结构）：在不暴露对象内部结构得同时，可以顺序的访问对象内部，可以帮助我们简化循环，简化数据操作
 */
function Iterator(item) {
  this.item = item;
}
Iterator.prototype.dealEach = function (fn) {
  for (var i = 0; i < this.item.length; i++) {
    fn(this.item[i], i);
  }
};

let iterator = new Iterator([9, 1, 23, 92, 345]);
iterator.dealEach(function (data, index) {
  log(data, index);
});

/*
 ** 备忘录模式
 ** 目的：记录状态，方便回滚
 ** 场景：系统状态多样，为了保证状态的回滚方便，记录状态
 ** 例子（基本结构）：记录对象内部的状态，当有需要时回滚到之前的状态或者方便对象使用
 */
function Memento() {
  var cache = {};
  return function (cacheName) {
    if (cache[cacheName]) {
      // There is no cached operation
    } else {
      // There are cached operations
    }
  };
}
var MementoFn = Memento();
MementoFn('xxx')