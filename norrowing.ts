function viewtodo(todos:string[]|null){
    if(todos){
        todos.map((todo)=>console.log(todo));
    }
    else{
        console.log("No todos");
    }
}
let todos= ["todo1", "todo2"];

viewtodo(todos);
viewtodo(null);

