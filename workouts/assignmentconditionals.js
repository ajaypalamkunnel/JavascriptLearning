var email=true;
var facebook=true;
var google = true;

// this works check each other and depend upon codition
if(email){
    console.log("You are logged in successfully");
    
}
if (facebook){
    console.log("you are logged by facebook");
}
if(google){
    console.log("you are loged by google");
}
if(email){
    console.log("You are logged in successfully");
}


// || this works only by the any one  condition are true  it work as true 
if(email || facebook || google){
    console.log("You are logged in successfully");
}else{
    console.log("Please log in");
}



// &&  this works only for all conditions are true only
if(email && facebook && google){
    console.log("you are loged successfully");
}else{
    console.log("Please log in");
}
