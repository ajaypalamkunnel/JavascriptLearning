 import User from "./classjs";

//const User = require(".classjs.js");

const hitesh = new User("hitesh", "hitesh@lco.dev");

console.log(hitesh.getInfo());
hitesh.enrollCourse("React Bootcamp");
hitesh.enrollCourse("Angular Bootcamp");

console.log(hitesh.getCourseList());

let courses = hitesh.getCourseList();

courses.forEach((c) => console.log(c));
