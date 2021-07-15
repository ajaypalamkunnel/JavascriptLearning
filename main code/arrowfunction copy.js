//Normal function
// function isEven(element){
//     if(element % 2 == 0){
//         return true;
//     }
//     return false
// }

// console.log(isEven(2));



//Arrow function

var  isEven = (element) =>{
    return element %2 ==0;
}
console.log(isEven(2));


//call backfunction

var result=[2,4,6,8].every(isEven);
console.log(result);
//this gona true only by the all elements in array are even number



//arrow function can in very little bit step

var result = [2,4,6,8].every((e)=>{
    return e % 2==0;
})
console.log(result);



// //the above function can be also wrritten in single line of code

// var result =[2,4,6,8].every((e) => (e % 2 ===0));

// console.log(result);




// var result =[2,4,6,8].every((e)=>{
//     return e%2===0
// })

// console.log(result);


// var result=[2,4,6,8].every((e)=> (e%2===0))
// console.log(result);




