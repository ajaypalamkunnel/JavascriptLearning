//define a fuction that can answer the role of a user
//A user can be on following roles
//admin -With all access
//subadmin -with access to create/delete course 
//testprep - with access to create/delete tests
//user - consume all content
//other - trial user


var getUserRole = function(role,name){
    switch (role) {
        case "admin":
            return `${name} With all access`
        
        case "subadmin":
            return `${name}with access to create/delete course`
            
        case "testprep":
            return `${name} with access to create/delete tests`
            
        case "user":
            return `${name} consume all content`
               
        default:
            return `${name} is a trial user`
            
    }
}

var getRole = getUserRole("admin","ajay");
console.log(getRole);

//this work also without break;
