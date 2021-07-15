var User = function(firstName,courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCourseCourse = function (){
        console.log(`course count is: ${courseCount}`);

    }
}

var ajay = new User("ajay",3)
console.log(ajay);