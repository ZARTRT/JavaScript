// 一般处理模块之间不方便直接沟通，异步与同步模块不方便直接沟通

let log = (function () {
  // return window.console.log
  return global.console.log;
})();
function observe() {
  this.message = {};
}
observe.prototype.regist = function (type, fn) {
  this.message[type] = fn;
};
observe.prototype.fire = function (type) {
  return this.message[type].call(this, arguments);
};

var observeOb = new observe();

//观察者模式-不同模块沟通
function comment() {
  var self = this;
  this.commentList = [
    {
      type: "normal",
      content: "xxxxx",
    },
  ];
  observeOb.regist("indexComment", function () {
    var _arr = [];
    self.commentList.forEach((item) => {
      if (item.type == "normal") {
        _arr.push(item);
      }
    });
    return _arr[0];
  });
  index();
}
function index() {
  // observeOb.fire("indexComment");
  log(observeOb.fire("indexComment"));
}
comment();

let _num = Math.random() * 10 + 40;
// log(_num);
let _num1 = Math.floor(_num, 0);
log(_num1);
log(_num1 / 10);
let _num2 = Math.floor(_num1 / 10, 0);
log(_num2);
// log(Math.floor(Math.random() * 10 + 40));
// log(Math.floor((Math.random() * 10 + 40) / 10),0);
