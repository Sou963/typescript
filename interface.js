var user = [];
var adduser = {
    id: 0,
    name: "Mukta Bosu",
    age: 50,
};
user.push(adduser);
var viewinfo = function (user) {
    console.log("User Info: ID=".concat(user.id, ", Name=").concat(user.name, ", Age=").concat(user.age));
};
user.forEach(function (user) { return viewinfo(user); });
