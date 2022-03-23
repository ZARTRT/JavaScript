let p = {x:1};
let q = Object.create(p);
console.log(p.isPrototypeOf(q));
console.log(Object.prototype.isPrototypeOf(q));