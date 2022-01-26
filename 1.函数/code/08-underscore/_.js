(function (root) {
  var _ = function (data) {
    if (!(this instanceof _)) {
      return new _(data);
    }
    this.wrapper = data;
  };

  _.unique = function (source, callback) {
    var result = [];
    var i = 0;
    for (; i < source.length; i++) {
      var target = callback ? callback(source[i]) : source[i];
      if (result.indexOf(target) === -1) result.push(target);
    }
    return result;
  };

  _.chain = function (data) {
    var instance = _(data);
    instance._chain = true;
    return instance;
  };

  var model = function (instance, outcome) {
    if (instance._chain) {
      instance.wrapper = outcome;
      return instance;
    }
    return outcome;
  };

  _.max = function (outcome) {
    outcome.push("max");
    return outcome;
  };

  _.prototype.ending = function () {
    return this.wrapper;
  };

  _.posscess = function (target) {
    var result = [];
    for (var name in target) {
      result.push(name);
    }
    return result;
  };

  var beforeHook = function (keys, callback) {
    for (var i = 0; i < keys.length; i++) {
      callback(keys[i]);
    }
  };

  _.mixin = function (object) {
    beforeHook(_.posscess(object), function (key) {
      var func = object[key];
      object.prototype[key] = function () {
        var deco = [this.wrapper];
        Array.prototype.push.apply(deco, arguments);
        return model(this, func.apply(this, deco)); //1: 对象   2: 数据的结果
      };
    });
  };

  _.mixin(_);

  root._ = _;
})(this);
