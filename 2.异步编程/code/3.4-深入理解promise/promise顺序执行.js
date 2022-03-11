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
async function func() {
  let i = 1;
  function perform(n) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log(i++);
        resolve();
      }, n * 1000);
    });
  }
  await perform(3);
  await perform(2);
  await perform(1);
}
func();
