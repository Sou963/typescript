
type User = [name: string, age: number];


let users: User[] = [];


let user1: User = ["mukta bosu", 50];


users.push(user1);


console.log(users);


type RequestType = "GET" | "POST";


let getRequest: RequestType;
getRequest = "GET";

function sendRequest(request: RequestType) {
    console.log(request);
}

sendRequest("GET");
