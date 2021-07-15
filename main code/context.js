// sayHello()
// //this type function calling is called context
// //because this is a features of javascript we can define a function we can call it from 
// //top of the function because javascript makes the function as a global context...

// function sayHello(){
//     console.log("Hello guys");
// }




// tipper("5");

// function tipper(a){
//     var bill= parseInt(a);
//     //parase which converts string into number
//     console.log(bill  + 5);
// }

// tipper("5");






 function bigTipper(a){
    var bill= parseInt(a);
    //parase which converts string into number
    console.log(bill  + 5);
}

//we can call this fuction from anywhere like top or bottom 

// but we cannot call the below defined function like above
//because the below function cannot call before defineing like above.

var bigTipper2=function (a){
    var bill= parseInt(a);
    //parase which converts string into number
    console.log(bill  + 5);
}

bigTipper2(90)
