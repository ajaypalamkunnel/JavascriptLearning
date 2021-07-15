// var returnedValue=Math.max(3,4,5,3,4,8,)
// console.log(returnedValue);



// var myObj={};

// Object.assign(myObj,{a:1,b:2,c:3  , z:9,y:8,x:7})
// console.log(myObj);





// function sumOne(a,b){
//     return a+b;
// }

// var myAr=[5,4];
// console.log(sumOne(...myAr));//this is spread operator







function sumTwo(a,b ,...args){//this is rest operator
    console.log(args);
    var multi=a*b
    let sum =0;
    for (const arg of args){
        console.log(arg);
        sum=sum+arg

        }
        return [sum,multi];
}
console.log(sumTwo(3,5,6,8,9,3,4));