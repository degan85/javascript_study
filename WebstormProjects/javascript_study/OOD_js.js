
// 객체마다 메소드를 따로 갖고있어서 불필요한 중복되는 영역을 메모리에 올려놓고 있다

/*function Person(arg) {
    this.name = arg;

    this.getName = function () {
        return this.name;
    };
    this.setName = function (value) {
        this.name = value;
    };
}

*/


// javascript로 좀 더 효율적인 객체지향

/*
function Person(arg) {
    this.name = arg;
}

Person.prototype.getName = function() {
    return this.name;
};

Person.prototype.setName = function (new_name) {
    this.name = new_name;
};

*/


// 더글라스 크락포드가 제시한 방법

Function.prototype.method = function(name, func) {
    if(!this.prototype[name]){
        this.prototype[name] = func;
    }
};

function Person(arg) {
    this.name = arg;
}

Person.method("setName", function(value) {
    this.name = value;
});

Person.method("getName", function() {
    return this.name;
});

var me = new Person("zzoon");
console.log(me.getName());