// //simple for loop
// for(i=0 ; i<10 ; i++){
//     console.log(i);
// }




// //array check in for loop
// var myStates=[
//     "Kerala",
//     "Tamil Nadu",
//     "Delhi",
//     "Maharastra",
//     "Hydrabad",
// ];

//     for(i=0 ; i<myStates.length;i++){
//         console.log(myStates[i]);
//     }




// //
// var myStates=[
//     "Kerala",
//     "Tamil Nadu",
//     1990,
//     "Delhi",
//     "Maharastra",
//     "Hydrabad",
// ];

//     for(i=0 ; i<myStates.length;i++){
//         if(typeof myStates[i] !== "string")continue;
//         console.log(myStates[i]);
//     }




    // //while loop (increment before printing)

    // var myStates=[
    //     "Kerala",
    //     "Tamil Nadu",
    //     "Delhi",
    //     "Maharastra",
    //     "Hydrabad",
    // ];

// let i=0;
// while(i<myStates.length){
//     i++; //here the increment is put befor the printing 
//     //because the first value of array is not take in the printing
//     console.log(myStates[i]);
   
// }


// //while loop (increment after printing)
// let i=0;
// while(i<myStates.length){
//     console.log(myStates[i]);
//     i++   //here the increment is after the printing 
//           //because all the values of the array are printed
// }



// //Do while loop
// //do while loop it do first and after check the condition
// var myStates=[
//     "Kerala",
//     "Tamil Nadu",
//     "Delhi",
//     "Maharastra",
//     "Hydrabad",
// ];

// let i=0
// do{
   
//     console.log(myStates[i]);
//     i++; //these can be also written in increment before printing
//          //and also increment after printing;
// }while(i<myStates.length);





//for each loop sample

// var myStates=[
//     "Kerala",
//     "Tamil Nadu",
//     "Delhi",
//     "Maharastra",
//     "Hydrabad",
// ];

// myStates.forEach((s) => (console.log(s)));

//also written foreach loop like in below

//myStates.forEach((s) => console.log(s));




//for of loop (it is a new type loop);

// var names=[
//     "Youtube",
//     "facebook",
//     "Instagram",
//     "Flipkart",
//     "Amazon"
// ]
// //"of" for array
// for (const n of names){
    
//     console.log(n);
// }

// //for in loop

// const symbols ={
//     yt:"Youtube",
//     fb:"facebook",
//     ig:"Instagram",
//     fk:"Flipkart",
//     am:"Amazon"
// }

// for(const n in symbols){
//     //"in" is used for objects;
//     console.log(`Key is this : ${n} and value is : ${symbols[n]}`);
// }

