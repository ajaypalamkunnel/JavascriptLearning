var counter = document.querySelector(".counter");
var followers=document.querySelector(".followers")
var access=document.querySelector(".access")

let count =1;

setInterval( () =>{
 if(count < 1000){
     count++
     counter.innerHTML = count;
 }

},1)

setTimeout(()=>{
    
    followers.innerHTML="Followers in instagram"
    access.innerHTML="You can add swipe up story now"

},5000)
document.getElementById("access").addEventListener("mouseover", function(){
    document.getElementById("access").style.color="yellow";
})
document.getElementById("access").addEventListener("mouseleave", function(){
    document.getElementById("access").style.color="white";
})