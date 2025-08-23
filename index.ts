let firstName: string = "Mukta";
let lastName: string = "Bosu";
let age: number = 50;
let isMarried: boolean = true;
let hobbies: Array<number> = [1, 2, 3, 4, 5];

function view(): void {
    console.log("This is a function");
}

let fullname: string = firstName.concat(" ", lastName);

console.log("The name is", fullname);
console.log("The age is",age);
console.log("Married:",isMarried);
console.log("Hobbies:",hobbies);
view();
