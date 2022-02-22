// 如果有原生方法那尽量调用

// 下面的函数调用都返回true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// 鲜为人知的事实：其实Array.prototype也是一个数组。
Array.isArray(Array.prototype);

// 下面的函数调用都返回false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray('123');
Array.isArray(123);
Array.isArray(true);
Array.isArray(false);

