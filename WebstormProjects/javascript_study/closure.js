// function HelloFunc(func) {
//     this.greeting = "hello";
// }
//
// HelloFunc.prototype.call = function(func) {
//     func ? func(this.greeting) : this.func(this.greeting);
// };
//
// var userFunc = function(greeting) {
//     console.log(greeting);
// };
//
// var objHello = new HelloFunc();
// objHello.func = userFunc;
// objHello.call();
//
// function saySomething(obj, methodName, name) {
//     return (function(greeting) {
//         return obj[methodName](greeting, name);
//     });
// }
//
// function newObj(obj, name) {
//     obj.func = saySomething(this, "who", name);
//     return obj;
// }
// newObj.prototype.who = function(greeting, name) {
//     console.log(greeting + " " + (name || "everyone") );
// };
//
// var obj1 = new newObj(objHello, "zzoon");
// obj1.call();


// var getCompletedStr = (function() {
//     var buffAr = [
//         'I am',
//         '',
//         '. I live in ',
//         '',
//         '. I\'am ',
//         '',
//         ' years old.'
//     ];
//
//     return ( function(name, city, age) {
//
//         buffAr[1] = name;
//         buffAr[3] = city;
//         buffAr[5] =  age;
//
//         return buffAr.join('');
//     });
// })();
//
// var str = getCompletedStr('zzoon', 'seoul', 16);
// console.log(str);

function callLater(obj, a, b) {
    return (function() {
        obj["sum"] = a + b;
        console.log(obj["sum"]);
    });
}

var sumObj = {
    sum : 0
};

var func = callLater(sumObj, 1, 2);
setTimeout(func, 500);