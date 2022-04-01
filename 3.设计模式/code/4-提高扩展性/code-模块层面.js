//观察者模式-转盘
//初始化html-》最终结果选定-》运动（动画，运动控制）；
//运动控制模块检测到赚了一圈-》通知到观察者-》通知到动画改变运动
function observe() {
  this.message = {};
}
observe.prototype.regist = function (type, fn) {
  this.message[type] = fn;
};
observe.prototype.fire = function (type) {
  this.message[type]();
};

var _domArr = [];
var observeOb = new observe();
// 初始化模块
function htmlInit(target) {
  for (var i = 0; i <= 9; i++) {
    var _div = document.createElement("div");
    _div.setAttribute("class", "item");
    _div.innerHTML = i;
    target.appendChild(_div);
    _domArr.push(_div);
  }
}
// 结果选定模块
function getFinal() {
  var _num = Math.random() * 10 + 40;
  return Math.floor(_num, 0);
}
// 动画效果
function mover(moveConfig) {
  var nowIn = 0;
  var removeNum = 9;

  var timer = setInterval(function () {
    if (nowIn != 0) {
      removeNum = nowIn - 1;
    }
    _domArr[removeNum].setAttribute("class", "item");
    _domArr[nowIn].setAttribute("class", "item item-on");
    nowIn++;
    if (nowIn == moveConfig.moveTime) {
      clearInterval(timer);
      if (moveConfig.moveTime == 10) {
        observeOb.fire("finish");
      }
    }
  }, moveConfig.speed);
}

// 转动控制
function moveControll() {
  var final = getFinal(); // 最终结果
  var _circle = Math.floor(final / 10, 0); // 总共跑几圈
  var _runCircle = 0; // 已经跑了几圈
  var stopNum = final % 10; // 停在哪个奖品
  var _speed = 200; // 速度
  //  第一次转动
  mover({
    moveTime: 10, // 第一圈转十个奖品
    speed: _speed,
  });
  //  下一圈怎么转
  observeOb.regist("finish", function () {
    var _time = 0; // 下一圈转几圈
    _speed -= 50; // 转完一圈后速度要减慢
    _runCircle++; // 已经跑过的圈数
    if (_runCircle <= _circle) {
      _time = 10; // 跑一圈 == 跑十个奖品
    } else {
      _time = stopNum; // 停在选好的奖品上
    }

    mover({
      moveTime: _time, // 转到第几个奖品上
      speed: _speed, // 速度
    });
  });
}
htmlInit(document.getElementById("app"));
moveControll();

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
      if (item.type == "hot") {
        _arr.push(_item);
      }
    });
    return _arr;
  });
}

function index() {
  observeOb.fire("indexComment");
}

//职责链模式-axios源码(拦截器)
function Axios(instanceConfig) {
  this.default = instanceConfig;
  this.interceptors = {
    request: new interceptorsManner(),
    response: new interceptorsManner(),
  };
}
Axios.prototype.request = function () {
  var chain = [dispatchRequeset, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.handlers.forEach(function (interceptor) {
    chain.unshift(interceptor.fulfilled.interceptor.injected);
  });
  this.interceptor.response.handlers.forEach(function (interceptor) {
    chain.push(interceptor.fulfilled, intersecor.rejected);
  });
  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }
  return promise;
};

function interceptorsManner() {
  this.handlers = []; //存放use加入的方法
}
interceptorsManner.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
  });
};

//职责链模式-表单验证
//表单事件绑定-> >表单前端验证-》表单后端验证

input.onblur = function () {
  var _value = input.value;
  var _arr = [font, back];
  async function test() {
    var _result = _value;
    while (_arr.length > 0) {
      _result = await _arr.shift()(_result);
    }
    return _result;
  }
  test().then((res) => {
    console.log(res);
  });
};

function font(_result) {
  return (_result += 1);
}
function back(_result) {
  return new Promise((resolve, reject) => {
    resolve((_result += 3));
  });
}
//职责链模式-表单验证：暴露接口写法
function font(_result) {
  return (_result += 1);
}
function back(_result) {
  return new Promise((resolve, reject) => {
    resolve((_result += 3));
  });
}
function go(_result) {
  return (_result += 2);
}
function FormTest() {
  this.arr = [font, back];
}
FormTest.prototype.test = function () {
  var _value = input.value;
  async function test() {
    var _result = _value;
    while (_arr.length > 0) {
      _result = await _arr.shift()(_result);
    }
    return _result;
  }
  test().then((res) => {
    console.log(res);
  });
};

FormTest.prototype.add = function (fn) {
  this.arr.push(fn);
};
let form = new FormTest();
input.onblur = function () {
  form.add(go);
  form.test();
};

//访问者模式-不同角色访问财务
function report() {
  this.income = "";
  this.cost = "";
  this.profit = "";
}

function boss() {}
boss.prototype.get = function (num) {};
function account() {}
account.prototype.get = function (num1, num2) {};
function vistor(data, man) {
  var handle = {
    boss: function (data) {
      man.get(data.profit);
    },
    account: function (data) {
      account.get(data.income, data.cost);
    },
  };
  handle[man.constructor.name](data);
}
vistor(new report(), new boss());

function table() {}
table.prototype.show = function () {};
table.prototype.delete = function (id) {
  vistor(this, tableData, "delete", id);
};
table.prototype.add = function () {};

//访问者模式-表格
var tableData = [
  {
    id: 1,
    name: "xxx",
    price: "xxx",
  },
];

function vistor(table, data, handle) {
  var handleOb = {
    delete: function (id) {},
    add: function () {},
  };
  var arg = Array.prototype.splice(arguments);
  arg.splice(0, 3);
  handleOb[handle].apply(this, arg);
}
