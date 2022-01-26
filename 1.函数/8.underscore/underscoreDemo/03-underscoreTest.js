var _ = require('./underscore-min');
arr = [1,2,3,4,5,6,7,8,9]

// each 用法
// _.each(arr,function(element, index, list){
//     // console.log(element);
//     // console.log(index);
//     // console.log(list);
// });

// map 用法
_.chain(arr).map(function(value, index, list){
    // console.log(value);
    // console.log(index);
    // console.log(list);
    // console.log(value * 3); 
    return value * 3
}).each(function(element,index){
    console.log(element);
});

