interface person{
      forthis:()=>string;
}
class user implements person{
    constructor(private name:string,private age:number){

    }
    forthis= () =>{
        return `Name: ${this.name}, Age: ${this.age}`;
    }

}

let user1=new user("John",30)
console.log(user1.forthis());