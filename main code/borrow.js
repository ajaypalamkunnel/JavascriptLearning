var ajay ={
    firstName : "Ajay",
    lastName : "ps",
    role:"admin",
    courseCount:"5",
    getInfo:function(){
        console.log(`The user firstname is ${this.firstName} and lastname is ${this.lastName}
        and the user have the role of ${this.role} and the user studing ${this.courseCount} courses`);
    }
}


var hitesh ={
    firstName : "hitesh",
    lastName : "choudary",
    role:"SubAdmin",
    courseCount:"3"
}

//bind is used to execute the function inside the another object
//ajay.getInfo.bind(hitesh) ();
//this is can be also writ like the
var hiteshInfo=ajay.getInfo.bind(hitesh)
hiteshInfo()


//the "call" can be used also used to like bind
ajay.getInfo.call(hitesh)