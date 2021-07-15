// //object
// var mobile={
//     Brand :"Apple",
//     Model:"i phone 11 pro max",
//     Display:"5.5 inch F HD+ ips display",
//     Processor:"Bionic chip",
//     Camera:"Triple camer 12mp main camera",
//     Battery:"5000 Mah Fastcharge",
//     Price:"90000"
    
// }
// console.log(mobile);




//function inside the object

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


user.buyCourse("Rect js ,Angular,Fullstack Development");
console.log(user.userInfo());