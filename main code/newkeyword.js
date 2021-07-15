var user = function (firstname,courseCount){
    this.firstname=firstname;
    this.courseCount=courseCount;
    this.getcourseCount =function(){
        console.log(`Course count is : ${courseCount}`);
    };
}
//prototype is used to create function outside a object
user.prototype.getFirstName = function () {
    console.log(`Your firstName is : ${this.firstname}`);
}
var ajay=new user("ajay",2)
ajay.getcourseCount()
//ajay.getFirstName()
if(ajay.hasOwnProperty("firstname")){
    ajay.getFirstName();
    
}
//console.log(ajay);

var sam=new user("sam",3)
sam.getcourseCount();
sam.getFirstName();
//console.log(sam);