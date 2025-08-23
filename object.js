var user;
user = [];
var user1;
user1 = { name: "Sourav Bosu", id: 41220300439 };
var user2;
user2 = { name: "Avishek Bosu", id: 1 };
user.push(user1);
user.push(user2);
for (var key in user) {
    var element = user[key];
    console.log(element);
}
