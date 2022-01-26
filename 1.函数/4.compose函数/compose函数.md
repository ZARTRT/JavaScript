# compose函数

compose的作用就是组合函数，将函数串联起来执行，前一个函数的输出值是后一个函数的输入值

```js
        // 复合函数一
        // let calculate = x => (x+10)*10;
        // console.log(calculate(10));

        // 复合函数二、
        let add = x => x + 10;
        let multiply = y => y * 10;
        // let compose = (f, g) => {
        //     return function (x) {
        //         return f(g(x));
        //     }
        // }
        // let calculate = compose(multiply, add);
        // console.log(calculate(10));

        // 复合函数三、
        // let compose = function () {
        //     let args = [].slice.call(arguments);
        //     return function (x) {
        //         return args.reduceRight(function (res, cb) {
        //             return cb(res);
        //         }, x)
        //     }
        // }

        // 复合函数四、
        const compose = (...args) => x => args.reduceRight((res, cb) => cb(res), x);

        let calculate = compose(multiply, add);
        console.log(calculate(10));
```

