
// function init(){
//     var firstName ="ajay";
//     console.log("iam init");
//     function sayFirstName(){
//         console.log(firstName);
//     }
//    return sayFirstName;
// }
// var value =init()
// //this is closure
// value()





// function doAddition(x){
//     return function(y){
//        return x+y;
//     }
// }

// var add = doAddition(4);
// console.log(add(7));


// // this is curring
// console.log(doAddition(5)(5));


//closure

function abc(){
    this.x;
    this.y;

    this.set =function(a,b){
        this.x=a;
        this.y=b;
    }
    this.display =function(){
        console.log(this.x+this.y);
    }
}
//here creating a instance for abc using "new " keyword
// "ob."  use all properies of abc using ob.
var ob = new abc()

ob.set(10,40);
ob.display();

var ob1=new abc()
ob1.set(50,50);
ob1.display();




