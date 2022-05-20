//vue
function store(){
  this.store={

  }
  if(store.install){
  	return store.install;
  }
  store.install=this;
}
store.install=null;
var s1 = new store()
var s2 = new store()
s1.store.a = 1;
console.log(s2); // {store: 1},始终都是同一个对象

//vue-router
let _Vue;
function install (_Vue) {
  if (install.installed && _Vue === Vue) return
  install.installed = true
  
  _Vue = Vue
}
 
 