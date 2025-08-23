abstract class user{
    name:string;
    age:number;
    
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    abstract viewuser():void;
}
class student extends user{
     id:number;
     constructor(name:string,age:number,id:number){
            super(name,age);
            this.id=id;
     }
    viewuser(): void {
        console.log(`Name: ${this.name},Age: ${this.age},ID: ${this.id}`);
    }

}

let student1=new student("Mukta Bosu",50,41220300439);
student1.viewuser();