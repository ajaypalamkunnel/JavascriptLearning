var courses=[
    {
        name:"Complete React js course",
        price:"2.6"
    },
    {
        name:"Complete Angular js course",
        price:"2.4"
    },
    {
        name:"Complete MERN js course",
        price:"2.8"
    },
    {
        name:"Complete C++ js course",
        price:"2.6"
    }

];

function generateLIST(){
    const ul=document.querySelector(".list-group");
      //this line for to avoid the repetation during the sort
     ul.innerHTML ="";
       courses.forEach((courses)=>{
       //to create the <li></li> by javascript use "createElement".
        const li =document.createElement("li");
        //this line is for add class to the li tag
        li.classList.add("list-group-item");
        //this is line is for injecting the course name to the li "<li></li>"
        const name= document.createTextNode(courses.name);
        //to add the name.
        li.appendChild(name)

        //to create the span tag 
        const span=document.createElement("span");
        //to create class to the span tag
        span.classList.add("float-right");

        //to inject price to the span
        const price=document.createTextNode("$" +courses.price)
        //to add the price 
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)

    })
}
//generateLIST()


window.addEventListener("load",generateLIST);


const button=document.querySelector(".sort-btn")

button.addEventListener("click",()=>{
    courses.sort((a,b)=> a.price - b.price)
    generateLIST()
})

const button2=document.querySelector(".sort-btn2")

button2.addEventListener("click",()=>{
    courses.sort((a,b)=> b.price - a.price)
    generateLIST()
    
})