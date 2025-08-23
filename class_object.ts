class user{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    viewuser(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class student extends user{
    id:number;
    constructor(name:string,age:number,id:number){
        super(name,age);
        this.id=id;
    }
    viewstudent(){
        console.log(`Name: ${this.name}, Age: ${this.age}, ID: ${this.id}`);
    }
}
let user1=new student("Mukta Bosu",50,41220300439)
user1.viewstudent()