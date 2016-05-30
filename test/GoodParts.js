/**
 * Created by mr_mac1 on 16/5/29.
 */
var stooge = {
    firstName : 'tracy',
    middleName : 'kobe'
};

var another = Object.create(stooge);
another.add = 'add';

for ( var index in another ) {
    //过滤掉原型链中的数据
    if ( another.hasOwnProperty(another[index]) ) {
        //console.log(another[index]);
    }
}


/*Function*/

var add = function ( a, b ) {
    return a + b;
};

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

myObject.double = function() {
    this.value = add(this.value, this.value);
};
myObject.double();

console.log(myObject.value);