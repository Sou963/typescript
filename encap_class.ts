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
    private id:number;
    constructor(name:string,age:number){
        super(name,age);
    }
    viewstudent(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    setid(id:number):void{
        this.id=id;
    }
    getid():number{
        return this.id;
    }
}
let user1=new student("Mukta Bosu",50)
user1.setid(41220300439);
console.log(user1.getid());
user1.viewstudent()