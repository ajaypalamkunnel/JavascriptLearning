// //part-1 for this key word


// console.log(this);
// var game="basketball";

// function sayName(){
//     var name="Ajay"
//     console.log(this.name);
// }
// sayName()







//Part 2 : this keyword
console.log(this);
var user ={
    Name:"Ajay",
    courseCount:"4",
    getCourseCount: function() {
        console.log("LINE 7",this);
        function sayHello(){
            console.log("Hello");
            console.log("LINE 28",this);
        }
        sayHello()

    },
}
user.getCourseCount();

