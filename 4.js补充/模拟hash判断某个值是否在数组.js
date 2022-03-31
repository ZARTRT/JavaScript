function hash(a){
    return a
}



let arr = new Array(10)
let a = 3
let b = 6
let c = 7
let d = 9


arr[hash(a) % arr.length] = a
arr[hash(b) % arr.length] = b
arr[hash(c) % arr.length] = c
arr[hash(d) % arr.length] = d



console.log(arr[hash(3) % arr.length])