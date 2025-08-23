let user:object[];

user=[];
let user1:{name:string,id:number};
user1={name:"Sourav Bosu",id:41220300439};
let user2:{name:string,id:number};
user2={name:"Avishek Bosu",id:1};
user.push(user1);
user.push(user2);
for (const key in user) {
    const element=user[key];
    console.log(element);

}