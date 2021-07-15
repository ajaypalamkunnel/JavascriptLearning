//wheater outside and inside
// var temperature =20;

// if(temperature<20){
//     console.log("The outside is so cold...");
// }else{
//     console.log("The out side so HOT...");
// }


//Speed checking meter

// var runningSpeed = 80;
// var limitedSpeed = 100;

// if(runningSpeed>limitedSpeed){
//     console.log("YOUR SPEED SO HIGH PLEASE SLOW DOWN YOUR CAR");
// }else{
//     console.log("YOUR GOING SAFE");
// }


//user is only allowed to make purchase when he is only done following;
//logged in;
//email varified ;
//card info - valid;
//if anyone is missing , stop purchasing;

// var isUserIsLoggedIn = true;
// var isEmailVerified = true;
// var cardInfo = true;

// if(isUserIsLoggedIn){
//     console.log("Your are succesfull loged in");
//     if(isEmailVerified){
//         console.log("Your email is varified ");
//         if(cardInfo){
//             console.log("you can make purchase");
//         }
//     }
// }

//this same code can be write this like easily

//  && == it is work only for everythig is in true state;
//  || == it is work  for one statement is true the everthing is true;

//here one vlaue is false the programe take the else case;


var isUserIsLoggedIn = true;                                                                                                                       
var isEmailVerified = true;
var cardInfo = true;

// if(isUserIsLoggedIn && isEmailVerified && cardInfo){
//     console.log("You are allowed to make purchase");
// }else{
//     console.log("you are not allowed to make  purchase");
// };
if(isUserIsLoggedIn ||isEmailVerified || cardInfo){
    console.log("You can log in but you can't make purchase");
}console.log("you can't do anything please log in");



// sample user authetication

// show user a signout button if he is authenticated

// otherwise show him option to signup/login

// var authenticated=true;

// if(authenticated){
//     console.log("show signout button");
// }else{
//     console.log("show login option");
// }


// this can be also written like this

// var authenticated=true;

// authenticated ? console.log("Show signout button") : console.log("show login option"); 
