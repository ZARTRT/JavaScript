(function(root){
    // 创建名为"_"的underscore函数对象（方法）
    var _ = function(data){
        if(!(this instanceof _)){
            return new _(data);
        }
        this.wrapper = data
    }

    // 为对象扩展方法调用
    _.unique = function(source,callback,name){
        var ref = []
        for(let i = 0;i<source.length;i++){
            var target = callback ? callback(source[i]) : source[i];
            if (ref.indexOf(target) === -1) {
                ref.push(target)
            }
        }
        return ref;
    }

    // 函数实例的原型上扩展方法调用
    // _.prototype.unique = function(){
    //     console.log('"_().unique():"函数实例调用');
    // }

    _.add =function(data){
        data.push("101011")
        return data
    }
    _.del =function(){}
    _.update =function(){}

    // chain函数是特殊underscore实例对象
    // 1.这里的步骤很关键，因为underscore流式编程的意义在与对象裹挟着结果参数
    // 2.那么这里需要实例出来一个对象，作为下一次传递的对象
    // 3.定义一个属性_chain属性，作为辅助函数model逻辑处理时判断的条件
    _.chain = function(data){
        var instance = _(data)
        instance._chain =true
        return instance
    }

    // 定义辅助函数model
    var model = function(instance,outcome){
        if (instance._chain) {
            instance.wrapper = outcome;
            return instance;
        }
        return outcome;
    }

    // 最终获取数据结果
    _.prototype.ending = function(){
        return this.wrapper
    }

    // 遍历出underscore实例所有的方法名并用数组保存
    _.possess = function(params){
        var ref =[];
        for (let name in params) {
            ref.push(name)
        }
        return ref
    }

    // 将possess返回的数组通过for来循环调用回调函数，依次给实例原型上增加方法
    var berforHook = function(arr,callback){
        for (let index = 0; index < arr.length; index++) {
            callback(arr[index]);            
        }
    };

    // mixin 混入
    // 1.underscore可枚举的属性
    // 2.将可枚举的属性存入数组这种
    // 3.遍历数组，将underscore的枚举给underscore原型对象扩展
    _.mixin = function(target){
        // berforHook方法
        // 参数1:将underscore可枚举的属性进行遍历存储
        // 参数2:利用回调函数将存储的枚举遍历后拿回来放在underscore实例的原型上
        berforHook(_.possess(target),function(key){
            // 重点1:将underscore对象的方法写在原型上
            var func = target[key]
            // 重点2:这里通过underscore实例调用func()方法时，记得给实例传参
            // 重点3:调取实例原型上的方法时，传递过来的参数要接受
            target.prototype[key] = function(){
                // 重点4:实例结果要返回
                var decon = [this.wrapper]
                Array.prototype.push.apply(decon,arguments)
                // 重点5:调用时，将this指向实例，将行参一一传递给对象
                // return func.apply(this,decon)
                // 重点6:this：实例对象，func.apply(this,decon)：本道工序处理的结果
                return model(this,func.apply(this,decon))
            }
        })
    }
    _.mixin(_)
    // 函数也是对象
    root._ = _;
})(this)