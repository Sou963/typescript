let userinfo:()=>void;

let userinfo1:(name:string)=>void;

var userinfo2:(name:string,age:number)=>void;

userinfo=()=>{
    console.log("user info function");
}

userinfo1=(name:string)=>{
    console.log(`user info function with name:${name}`);
}

userinfo2=(name:string,age:number)=>{
    console.log(`user info function with name:${name} and age:${age}`)
}
userinfo();
userinfo1("John");
userinfo2("John",30);