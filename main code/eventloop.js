const uno =()=>{
    console.log("i am one");
}
const dos =()=>{
    setTimeout(()=>{
        console.log("wait a few seconds");

    },2000)
    console.log("i am two");
}
const tres =()=>{
    console.log("i am three");
}

uno();
dos()
tres()