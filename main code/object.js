// //object
// var user ={
//     firstName :"Ajay",
//     lastName:"PS",
//     email:"ajaypalamkunnel45@gmail.com",
//     role:"Admin",
//     logInCont:"44",
//     logedByFacebook:"true"
// }
// console.table(user);
// //to access a specific key value call "objectcname.key value"
// console.log(user.firstName);




//write function inside the object
var user ={
    firstName :"Ajay",
    lastName:"PS",
    email:"ajaypalamkunnel45@gmail.com",
    role:"Admin",
    logInCont:"44",
    logedByFacebook:"true",
    courseList:[],

    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled is total of ${this.courseList.length} courses`
    },
    userInfo:function(){
        console.table(this);
    }


}

var courseList =true;
user.buyCourse("React js course")
console.log(user.getCourseCount());
console.log(user.courseList[0]);
