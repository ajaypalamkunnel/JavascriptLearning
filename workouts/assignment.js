//varible assignment Sample signup form
const uid=4321;
var firstName = "Ajay"
var lastName ="PS"
var password ="1234";
var confirmPasswors="4321";
var isUserIsLoggedFrom="Google"
var isUserIsLoggedFromCountry="India";
var isUserIsLoggedFromState="Kerala";
var courseCountOfUser="3";
var isUserIsLogged=false;


console.log(`
The user is logged form : ${uid}
The user Name is : ${firstName+lastName}
The user using this password for login : ${password}
The user is logged From : ${isUserIsLoggedFrom}
user from : ${isUserIsLoggedFromCountry}
And the state is : ${isUserIsLoggedFromState}
And the course count of user  is : ${courseCountOfUser}`);

if(isUserIsLogged===true){
    console.log("The user is loged Now...");
}else{
    console.log("The User is not logged in");
}


