var user = /** @class */ (function () {
    function user(name, age) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.forthis = function () {
            return "Name: ".concat(_this.name, ", Age: ").concat(_this.age);
        };
    }
    return user;
}());
var user1 = new user("John", 30);
console.log(user1.forthis());
