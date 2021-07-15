var firstName = "ajay";

console.log("Line number 3" + firstName);

function sayname(){
    var firstName = " Mr.A"
    console.log("Line number 7 "+firstName);
    saynametwo()

    function saynametwo(){
        //var firstName = "Ajay ps"
        console.log("Line number 12"+firstName);
    } 
}
sayname()

//here the the functions can access varible only on there above varible don't ask 
//variabls to there below varibles 
//here line No. 1 is parent and No.5 is child of No.1 and No.10 is child of No.5
// so the child only can access there parents variable But..
// the parents cannot access there child's varible

//Remeber the story of ice cream.....