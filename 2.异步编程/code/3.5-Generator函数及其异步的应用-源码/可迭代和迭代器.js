let arr = new Array();
let str = 'tom'
let obj = {}
// console.log(typeof arr);
// console.log(typeof str);
// console.log(str[Symbol.iterator]()+'');
let iter = str[Symbol.iterator]()
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);