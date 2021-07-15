var User = function(firstName,courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCourseCount = function (){
        console.log(`course count is: ${courseCount}`);

     this.getFirstName = function()   {
         console.log(`The user name is  ${this.firstName} `);
     }

    }
}


// //this is the using of prototype..
// // prototype is help to define a function for an object 
// // prototype used for define a function outside of the object for object..
// // here "getFirstName" function is defined for user object here the function is defined outrside the object "user"

// User.prototype.getFirstName =function(){
//     console.log(`Your firstname is : ${this.firstName}`);
// }

var ajay = new User("ajay",3)
ajay.getCourseCount();
ajay.getFirstName()


var sam = new User("sam",4)
sam.getCourseCount();
sam.getFirstName();