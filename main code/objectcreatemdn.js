
var user ={
    name:"",
    courseCount: [],
    courseName:[],
    email:"",
    getUserName:function(){
        console.log(`Your name is ${this.name}`);
    },
    getCourseCount:function(){
        console.log(`Your have enrolled ${this.courseCount}`);
    },
    getCoursesName:function(){
        console.log(`your courses are ${courseName.length}`);

    },
    getEmail: function(){
        console.log(`your are registred with this ${email}`);
    }


}
// var ajay=Object.create(user);
// console.log(ajay);
// ajay.name="Ajay ps"


var sam=Object.create(user);
sam.name="sam kumar";
sam.courseCount=5;
sam.courseName="java"+"python"
sam.email="sam@gmail.com"

console.log(sam);




