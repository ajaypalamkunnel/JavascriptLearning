var mayMap= new Map();

mayMap.set(1,"aak");
mayMap.set(2,"do");
mayMap.set(3,"theen");
mayMap.set(4,"char");
mayMap.set(5,"paanch");

// console.log(mayMap);


for(let key of mayMap.keys()){
    console.log(`key is ${key}`);
}
for(let [key,values] of mayMap){
    console.log(`key is: ${key} and value is:${values}`);
}
//here in the (value,key)
mayMap.forEach((k,v) => console.log(`key is : ${k} and value is ${v} `));

mayMap.entries(6,"chah")
console.log(mayMap);