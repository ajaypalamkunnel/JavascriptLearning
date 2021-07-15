const uno =()=>{
    return("i am one");
}
// const dos =()=>{
//     setTimeout(()=>{
//         return " i am two" 
//     },2000)
     
//}

const dos =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (" i am two") 
        },2000)
    })
}
    
const tres =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("i am Three")
        },2000)
    })
}

const callMe = async() =>{
    let valueOne = uno();
    console.log(valueOne);

    let valueTwo= await dos();
    console.log(valueTwo);

    let valueThree= await  tres();
    console.log(valueThree);
    
    
    
}
callMe()
