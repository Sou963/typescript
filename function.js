var userinfo;
var userinfo1;
var userinfo2;
userinfo = function () {
    console.log("user info function");
};
userinfo1 = function (name) {
    console.log("user info function with name:".concat(name));
};
userinfo2 = function (name, age) {
    console.log("user info function with name:".concat(name, " and age:").concat(age));
};
userinfo();
userinfo1("John");
userinfo2("John", 30);
