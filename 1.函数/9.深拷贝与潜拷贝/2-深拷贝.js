let log = (function () {
    // return window.console.log
    return global.console.log;
  })();
  
//深拷贝实现
function deepCopy(target, source){ 
    if( !source || typeof source !== 'object'){ 
        return;
    }
    // 这个方法有点小trick，target一定得事先定义好，不然就不能改变实参了。
    // 具体原因解释可以看参考资料中 JS是值传递还是引用传递
    if( !target || typeof target !== 'object'){
        return; 
    }  
    // for(var key in source){
    //     if(source.hasOwnProperty(key)){
    //         if( source[key] && typeof source[key] == 'object'){
    //            target[key] = Array.isArray(source[key])? []:{};
    //            deepCopy(target[key], source[key]);
    //         } 
    //         else{
    //             target[key] = source[key];
    //         }    
    //     }    
    // } 
    for (let key of Object.keys(source)){
        if( source[key] && typeof source[key] == 'object'){
            target[key] = Array.isArray(source[key])? []:{};
            deepCopy(target[key], source[key]);
         } 
         else{
             target[key] = source[key];
         } 
    }
}

let today = {
    weather: 'Sunny',
    date: {
        week: 'Wed'
    } 
}

let tomorrow = {};
deepCopy(tomorrow, today);
// log(tomorrow)

tomorrow.weather = 'Cloudy';
tomorrow.date.week = 'Thurs';

log(today.weather); // 'Sunny'
log(today.date.week); //'Wed'