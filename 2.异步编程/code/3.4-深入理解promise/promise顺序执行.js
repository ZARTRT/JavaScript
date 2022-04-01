// setTimeout(() => {
//     console.log(1);
// }, 1000);
// setTimeout(() => {
//     console.log(2);
// }, 2000);
// setTimeout(() => {
//     console.log(3);
// }, 3000);

// let promise3 = Promise.resolve();
// promise3 = promise3.then(function () {
//    return new Promise(function (resolve,reject) {
//         setTimeout(() => {
//             console.log(1);
//             resolve();
//         }, 3000);
//     })
// })

// promise3 = promise3.then(function () {
//     return new Promise(function (resolve,reject) {
//          setTimeout(() => {
//              console.log(2);
//              resolve();
//          }, 2000);
//      })
//  })

//  promise3 = promise3.then(function () {
//     return new Promise(function (resolve,reject) {
//          setTimeout(() => {
//              console.log(3);
//              resolve();
//          }, 1000);
//      })
//  })

// .then方法优化如下
// let i = 1;
// let perform = function (n) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log(i++);
//       resolve();
//     }, n * 1000);
//   });
// };
// perform(3)
//   .then(function (data) {
//     return perform(2);
//   })
//   .then(function (data) {
//     return perform(1);
//   })
//   .then(function (data) {});

// async await结合
// async function func() {
//   let i = 1;
//   function perform(n) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         console.log(i++);
//         resolve();
//       }, n * 1000);
//     });
//   }
//   await perform(3);
//   // console.log(perform(3).value);
//   await perform(2);
//   await perform(1);
// }
// func();


// const promise1 = Promise.resolve(2);
// console.log(promise1);
// const promise2 = promise1.then(function (data) {
//   return 1
// })
// console.log(promise2);
// const promise3 = promise2.then(
//   function (data) {
//     console.log(data);
//   }
// )
// console.log(promise3);
// const promise4 = promise3.then(
//   function (data) {
//     console.log(data);
//   }
// )
// console.log(promise4);

// let promise1 = Promise.resolve()
let promise1 = new Promise(function (resolve, reject) {
  console.log(7000);
})
// console.log(promise1);
let promise2 = promise1.then(
  function(){
    console.log(8000);
  }
)
let promise3 = promise2.then(
  function(){
    console.log(9000);
  }
)
let promise4 = promise3.then(
  function(){
    return new Promise(function (resolve, reject) {
    })
  }
)
console.log(promise1);