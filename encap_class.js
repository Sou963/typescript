var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    user.prototype.viewuser = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return user;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age) {
        return _super.call(this, name, age) || this;
    }
    student.prototype.viewstudent = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    student.prototype.setid = function (id) {
        this.id = id;
    };
    student.prototype.getid = function () {
        return this.id;
    };
    return student;
}(user));
var user1 = new student("Mukta Bosu", 50);
user1.setid(41220300439);
console.log(user1.getid());
user1.viewstudent();
