// 一、适配器模式
// 适配器模式-接口适配
window.A = $;
A.o = function () {
  return $.on();
};
A.c = function () {
  return $.css();
};
// 适配器模式-参数适配
function f1(obj) {
  var _default = {
    name: "xxx",
    color: "red",
  };
  for (var item in _default) {
    _default[item] = obj[item] || _default[item];
  }
}


// 二、装饰者模式
// 装饰者模式-扩展老方法
var decorator = function (dom, fn) {
  if (typeof dom.onclick == "function") {
    var _old = dom.onclick;
    dom.onclick = function () {
      _old();
      fn();
    };
  }
};

/* 
**装饰者模式-vue数组
**vue2响应式的困境：数据双向绑定defineProperty(a,'b'),只对对象的属性具有响应，而数组没有。所以通过arr[num]在vue2里是没办法触发响应式的。
**我们在vue里面我们可以通过push shift pop 等方法实现数组的响应式，这是为什么呢？思考：能不能让数组的方法在vue2里面触发响应式
**这种情况很类似原方法满足不了我们现在的需求，那么我们在原方法的基础上扩展新方法。封装新方法-调用老方法-加入扩展操作 
*/
// 获取数组原型链，不要直接拿数组原型链来重写，这样会修改数组本身原型链的方法，不能这么做。
var arrayProto = Array.prototype;
// 拷贝原型链创造新数组，不用重写老原型链（Array.prototype），只在拷贝上操作。这样做只会影响data里面的数组，其他非data里面的数组不会影响到
// 第四步：将拷贝的数组添加入data 加入响应式。也就是说将vue中的数组全部重写成arrayMethods，并具有了重写后具有了方法响应式。so，data里面的数组通过pop，push等方法能触发响应式
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];
// 将push pop等方法进行装饰
methodsToPatch.forEach(function (method) {
  // cache original method
  // 第一步：重写新方法
  arrayMethods[method] = function () {
    var original = arrayProto[method];
    // 第二步：调用老方法
    var result = original.apply(this, args);
    // 第三步：加入扩展操作 
    dep.notify();
    return result;
  };
});

if (Array.isArray(value)) {
  if (hasProto) {
    protoAugment(value, arrayMethods);
  } else {
    copyAugment(value, arrayMethods, arrayKeys);
  }
  this.observeArray(value);
} else {
  this.walk(value);
}


// 三、装饰者模式
// 说个题外话，其实webpack也就是一个大的命令模式封装而成的。
//1,用户只管输入他要的命令，不用关心api
//2,命令和实现解耦，无论命令发生变动，还是实现发生变动，都不会彼此影响
var myCanvas = function () {};
myCanvas.prototype.drawCircle = function () {};
myCanvas.prototype.drawRect = function () {};

var canvasComand = (function () {
  var action = {
    drawCircle: function (config) {},
    drawRect: function (config) {},
  };
  return function excute(commander) {
    commander.forEach((item) => {
      action[item.command](item.config);
    });
  };
})();

// 绘制随机生成图片数量和顺序随机
var _data = {
  imgArr: [
    { img: "xxxx", title: "default title1" },
    { img: "xxxx", title: "default title2" },
  ],
  type: "normal",
};
_data.imgArr.forEach((img) => {
  //生成html
});
target.innerHTML = _html;

var createImg = (function () {
  var action = {
    create: function (obj) {
      var htmlArr = [];
      var _htmlstring = "";
      var _htmlTemplate =
        "<div><img src='{{img-url}}' /></div><h2>{{title}}</h2>";
      var displayWay = {
        normal: function (arr) {
          return arr;
        },
        reverse: function (arr) {
          return arr.reverse;
        },
      };

      obj.imgArr.forEach((img) => {
        var _html;
        _html = _htmlTemplate
          .replace("{{img-url}}", img.img)
          .replace("{{title}}", img.title);
        htmlArr.push(_html);
      });
      htmlArr = displayWay[obj.type](htmlArr);
      _htmlstring = htmlArr.join("");
      return "<div>" + _htmlstring + "</div>";
    },
    display: function (obj) {
      var _html = this.create(obj);
      obj.target.innerHTML = _html;
    },
  };

  return function excute(obj) {
    var _default = {
      imgArr: [{ img: "xxxx", title: "default title" }],
      type: "normal",
      target: document.body,
    };
    for (var item in _default) {
      _default[item] = obj[item] || _default[item];
    }
    action.display(_default);
  };
})();
createImg({
  imgArr: [
    { img: "xxxx", title: "default title1" },
    { img: "xxxx", title: "default title2" },
  ],
  type: "normal",
});