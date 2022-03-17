function not(f){
    return function () {
      var result = f.apply(this, arguments)
      return !result;
      }
}
var even = function (x) {
    return x % 2 === 0;
}
const odd = not(even);
var result  = [1,1,3,5,5].every(odd);
console.log(result);