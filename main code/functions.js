//normal function

// function sayhello(){
//     console.log("Hello there...");
// }
// sayhello()


//function with passing values

// function hello(name) {
//     console.log(`hello ${name} welcome to javascript`);
    
// }
// hello("Ajay")


// //function with return value;


// function namasthey(){
//     return "Hello in India"
// }

// var greetings= namasthey()
// console.log(greetings);

// // //this can be also like this

// console.log(namasthey());




// //function in variables


// //define a fuction that can answer the role of a user
// //A user can be on following roles
// //admin -With all access
// //subadmin -with access to create/delete course 
// //testprep - with access to create/delete tests
// //user - consume all content
// //other - trial user

// function getUserRole(role,name){
//     switch (role) {
//         case "admin":
//             return `${name} is  admin you can access all things ` 
//             break;
//         case "subadmin":
//             return `${name} is  subadmin you can crate/delete courses ` 
//             break;
//         case "testprep":
//             return `${name} is  testprep you can create/delete tests ` 
//             break;
//         case "user":
//             return `${name} is  user you can consume all courses ` 
//             break;
    
//         default:
//             return `${name} is a trial user`
//             break;
//     }
// }

// console.log(getUserRole("admin","ajay"));

// //can be call function also like this
// var getRole = getUserRole("subadmin","ajay ps")

// console.log(getRole);




// //we can write function with a variable


// var getUserRole=function (role,name){
//     switch (role) {
//         case "admin":
//             return `${name} is  admin you can access all things ` 
//             break;
//         case "subadmin":
//             return `${name} is  subadmin you can crate/delete courses ` 
//             break;
//         case "testprep":
//             return `${name} is  testprep you can create/delete tests ` 
//             break;
//         case "user":
//             return `${name} is  user you can consume all courses ` 
//             break;
    
//         default:
//             return `${name} is a trial user`
//             break;
//     }
// }

// console.log(getUserRole("admin","ajay"));

// //can be call function also like this
// var getRole = getUserRole("subadmin","ajay ps")

// console.log(getRole);




// var sum=function(a,b){
//     return a+b;
// }
// function abc(x){
//     console.log(x(10,20));
// }
// abc(sum)



//name less function
function abc(x){
    console.log(x(10,20));
}
abc(function(a,b){
    return a+b
})