//import of the class "User" from file "classjs.js" 
//import User from "./classjs";

//also import like this 
const User = require("./classjs.js");

const hitesh=new User("ajay","ajaypalamkunnel45@gamil.com")


console.log(hitesh.getInfo());


hitesh.enrollCourse("React course");
hitesh.enrollCourse("Angular course");

console.log(hitesh.getCourseList());

// let courses= hitesh.getCourseList();
// courses.forEach((c)=>console.log(c));
    

