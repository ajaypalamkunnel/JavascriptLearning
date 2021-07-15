//create an application with following roles;
//admin -you get full access
//subadmin -gets access to create/delete courses
//testprep get access to create/delete tests 
//user - get access to consume all content


var user ="admin"

switch (user) {
    case "admin":
        console.log("you get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
            console.log("get access to create/delete tests ");
            break; 
    case "user":
            console.log("get access to consume all content ");
            break;         
    
    default:
        console.log("you are a trial user");
        break;
}