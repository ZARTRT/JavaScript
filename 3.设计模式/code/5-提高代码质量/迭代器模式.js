//forEach
function Iterator(data){
  this.data=data;
}
Iterator.prototype.dealEach=function(fn){
  if(this.data instanceof Array){
     for(var i=0;i<this.data.length;i++){
       fn(this.data[i],i)
     }
  }else{
     for(var item in this.data){
       fn(this.data[item],item)
     }
  }
}


//数据迭代器
var data=[{num:1},{num:2},{num:3}]
function i(data){
    function Iterator(data){
      this.data=data;
    }
    Iterator.prototype.getHasSomenum=function(handler,num){
       var _arr=[];
       var handleFn;
       if(typeof handler=='function'){
         handleFn=handler;
       }else{
         handleFn=function(item){
             if(item[handler]==num){ // 当条件不成立，handleFn作为方法返回的就是undefined
                return item;
             }
         }
       }
       for(var i=0;i<this.data.length;i++){
          var _result=handleFn.call(this,this.data[i])
          if(_result){ // 如果是undefined，就不成立
            _arr.push(_result);  
          }
          
       }
       return _arr;
    }
    return new Iterator(data);
}
//i(data).getHasSomenum('num',1);
i(data).getHasSomenum(function(item){
  if(item.num-1==2){
      return item;
  }
});