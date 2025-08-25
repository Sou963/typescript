interface Iuser{
    id:number,
    name:string,
    age:number,
}
let user:Iuser[]=[];
let adduser: Iuser={
    id:0,
    name:"Mukta Bosu",
    age:50,
};
user.push(adduser);
var viewinfo=(user:{id:number,name:string,age:number})=>{
    console.log(`User Info: ID=${user.id}, Name=${user.name}, Age=${user.age}`);
}

user.forEach((user)=>viewinfo(user));