let mutipleType:[number,string];
mutipleType=[1,"Mukta"];
mutipleType.push(3,"Sourav Bosu",5,"Avishek Bosu");
console.log(mutipleType);
for(let i=0;i<mutipleType.length;i++){
    mutipleType.pop();
    mutipleType.pop();
}
console.log(mutipleType);

