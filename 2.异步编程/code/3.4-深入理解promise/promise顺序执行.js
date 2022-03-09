// setTimeout(() => {
//     console.log(1);
// }, 1000);
// setTimeout(() => {
//     console.log(2);
// }, 2000);
// setTimeout(() => {
//     console.log(3);
// }, 3000);

let promise3 = Promise.resolve();
promise3 = promise3.then(function () {
   return new Promise(function (resolve,reject) {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 3000);
    })
})

promise3 = promise3.then(function () {
    return new Promise(function (resolve,reject) {
         setTimeout(() => {
             console.log(2);
             resolve();
         }, 2000);
     })
 })

 promise3 = promise3.then(function () {
    return new Promise(function (resolve,reject) {
         setTimeout(() => {
             console.log(3);
             resolve();
         }, 1000);
     })
 })