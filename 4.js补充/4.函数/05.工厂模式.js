// 同样也是防止漏写new的尴尬，同时不写new也能实例化对象
function Person(name) {
  let obj = this;
  if (new.target !== Person) {
    obj = new Person();
  }
  obj.name = name;
  return obj;
}
let person = new Person("John");
let person = Person("John");
