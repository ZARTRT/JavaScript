let log = (function () {
  // return window.console.log
  return global.console.log;
})();

// 浅拷贝实现
let shallowCopy = (target, source) => {
  if (!source || typeof source !== "object") {
    return;
  }
  if (!target || typeof target !== "object") {
    return;
  }

  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
};

// 一维数组
let arr = [1, 2, 3];
let arr2 = [];
shallowCopy(arr2, arr);
// log(arr2)

let today = {
    weather: 'Sunny',
    date: {
        week: 'Wed'
    } 
}

let tomorrow = {};
shallowCopy(tomorrow, today);
// log(tomorrow)

tomorrow.weather = 'Cloudy';
tomorrow.date.week = 'Thurs';

log(today.weather); // 'Sunny'
log(today.date.week); //'Thurs'