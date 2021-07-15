
class User{
    
 constructor(name,email){
        this.name=name;
        this.email=email;
    }
   
    // #courseList=[]
    //function for get the information from the constructor function
    getInfo(){
        return {name:this.name , email:this.email}
    }
    //function for add the course name to the array
    // enrollCourse(name){
    //     this.#courseList.push(name)

    // }
    // //function for get course list
    // getCourseList(){
    //     return this.#CourseList
    // }
//static is makes function as private its does not execute outside the class
   static login(){
        return "Your loged in"
    }
}
class subAdmin extends User{
    constructor(name,email){
        super(name,email)
    }
     getAdminInfo(){
         return "I am subAdmin"
     }
} 
//export the class "user" to access any other file
module.exports=User




const tom = new subAdmin("tom","tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo("ajay","ajay@SpeechGrammarList.com"));





