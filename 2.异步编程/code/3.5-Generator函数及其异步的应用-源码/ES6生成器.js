function* createIterator() {
    let first = yield 1;
    let second = yield first + 2;
    yield second + 3
}

let iterator = createIterator();
iterator.next(); // {value:1,done:false}
iterator.next(4); // {value:6,done:false}
iterator.next(5); // {value:8,done:false}
iterator.next(); // {value:undefined,done:true}