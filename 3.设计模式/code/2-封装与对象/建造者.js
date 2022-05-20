//定义最终类
function Editor() {
  this.initer = new initHtml();
  this.fontControll = new fontControll();
  this.stateControll = new stateControll();
}
//html初始模块
function initHtml(domStyle) {
  this.template =
    "<div style={{editorStyle}}><div></div><div><textarea style={{areaSyle}}/></div></div>";
}
initHtml.prototype.initStyle = function () {};
initHtml.prototype.renderDom = function () {};
//字体颜色,大小控制
function fontControll() {}
fontControll.prototype.changeColor = function () {};
fontControll.prototype.changeFontsize = function () {};
//回滚
function stateControll() {
  this.state = [];
  this.nowstate = 0;
}
stateControll.prototype.saveState = function () {};
stateControll.prototype.stateBack = function () {
  var state = this.state[this.nowstate - 1];
  this.fontControll.changeColor(state.color)
  this.fontControll.changeFontsize(state.color)
};
stateControll.prototype.stateGo = function () {};
window.Editor = Editor;


// vue类的初始化过程
function Vue(options) {
  if (!(this instanceof Vue)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

export function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== "production") {
      console.error(
        "[vuex] already installed. Vue.use(Vuex) should be called only once."
      );
    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}
