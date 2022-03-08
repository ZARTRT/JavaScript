/* 
promise 解析过程
1.抽象模型resolve(promise,x)

2.x === promise
    如果promise和x指向相同的值

3.isPromise(x)
    如果x是一个promise
    当x是一个promise的时候，就直接看它的状态：pending、fulfilled、rejected

    pending时
    根据它对应状态的判断，返回一个带有then方法的promise对象或者函数等待判断promise状态，
    并且给then提供了promise成功和失败时会触发回调的方法

    fulfilled时
    根据它对应状态的判断，通过resolve方法把x.value的值设置为promise的值，状态变更为fulfilled

    rejected时
    根据它对应状态的判断，通过reject方法把x.value的值设置为promise的reason，状态变更为rejected

4.isObject(x) || isFunction(x)
    如果x是一个对象或一个函数，则找这个x对象里面有没有then

    如果没取到了then，那么抛出错误。

    如果取到了then并且是个函数，那么就处理一个对thenable的兼容，因为
    在promise规范/A+产生之前，我们的库已经实现了类似于promise的功能，规范产生之后我们希望兼容像
    thenable这样的情况。同样是状态在变更以后就不能在更改，由代码isCalled可见。
    resolvePromise和rejectPromise在一个promise中只会被触发一次，在给then传入这两个参数时发生错误，
    会判断isCalled是否被开启（promise状态）。如果开启，就意味着promise的状态被修改过。如果没有开启，
    则返回reject状态

    如果取到的then不是一个函数，则直接返回fulfill和值
    

5.如果x不是一个对象也不是函数，则直接返回fulfill和值

*/
function resolve(promise, x) {
    if (x === promise) {
        return reject(promise, new TypeError('cant be the same'))
    }
    if (isPromise(x)) {
        if (x.state === 'pending') {
            return x.then(() => {
                resolve(promise, x.value);
            }, () => {
                reject(promise, x.value)
            })
        }
        if (x.state === 'fulfilled') {
            return fulfill(promise, x.value)
        }
        if (x.state === 'rejected') {
            return reject(promise, x.value)
        }
    } else if (isObject(x) || isFunction(x)) {
        let then;
        try {
            then = x.then
        } catch (e) {
            return reject(promise, e)
        }
        if (isFunction(then)) {
            let isCalled = false;
            try {
                // y的参数是x.value
                then.call(x, function resolvePromise(y) {
                    if (isCalled) {
                        return;
                    }
                    isCalled = true;
                    resolve(promise, y);
                }, function rejectPromise(r) {
                    if (isCalled) {
                        return;
                    }
                    isCalled = true;
                    reject(promise, r);
                });
            } catch (e) {
                if (!isCalled) {
                    return reject(promise, e)
                }
            }
        } else {
            return fulfill(promise, x)
        }
    } else {
        return fulfill(promise, x);
    }

}