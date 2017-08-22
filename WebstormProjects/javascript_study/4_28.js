

// var value = 100;
//
// var myObject = {
//     value: 1,
//     fun1: function () {
//         var that = this;
//         this.value += 1;
//         console.log('func1() called. this value : ' + this.value);
//
//         fun2 = function () {
//             that.value += 1;
//             console.log('func2() called. this value : ' + that.value);
//
//             fun3 = function () {
//                 that.value += 1;
//                 console.log('func3() called. this value : ' + that.value);
//             }
//             fun3();
//         }
//         fun2();
//     }
// };
//
// myObject.fun1();
// console.log(value);

// function Person(name, age, gender, posiition) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
//
// var qux = Person('qux', 20, 'man');
// console.log(qux);
//
// console.log(window.name);
// console.log(window.age);
// console.log(window.gender);

// function A(arg) {
//     if(!(this instanceof arguments.callee))
//         return new A(arg);
//     this.value = arg ? arg : 0;
// }
//
// var a = new A(100);
// var b = A(10);
// var c = A();
//
// console.log(a.value);
// console.log(b.value);
// console.log(c.value);
// console.log(global.value);

// function Person(name, age, gender, posiition) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     return {
//         name: 'bar', age: 20, gender: 'woman'
//     };
// }

// foo();

// var x = 1;
// (function(){
//     bar();
//
//     function bar() {
//         console.log("bar and x :" + x);
//     }
//
//     x = 2;
// })();

// 클로져
// function outerFunc() {
//     var x = 10;
//     var innerFunc = function() { console.log(x); };
//     return innerFunc();
// }
// var inner = outerFunc();
// inner;