const cards= document.querySelectorAll(".card");
console.log(cards);

//variables
var isFlipped=false;
var firstCard;
var secondCard;

cards.forEach((card)=>card.addEventListener("click",flip))

//function for flipping the card
function flip(){
    //console.log("flipped")
    //console.log(this);
    this.classList.add("flip")
   // console.log(this);
    if (!isFlipped) {
        isFlipped = true;
        firstCard=this;
    }else{
        secondCard=this;
        // console.log(firstCard);
        // console.log(secondCard);
        check()
    }
}
//function for check the it both are same or not
 check=()=>{
   // console.log("checking...");
   if(firstCard.dataset.image === secondCard.dataset.image){
       success();
   }else {
       fail();
   }
}
//function for if both are same 
 success=()=>{
   // console.log("success");
   firstCard.removeEventListener("click",flip);
   secondCard.removeEventListener("click",flip);
    reset()
}
//functon for if both are not same  
 fail=()=>{
    //console.log("failed");
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip")
        reset();
    },1000)
}
//function for rest
 reset=()=>{
isFlipped=false;
firstCard; 
secondCard;
console.log("clicked");
}


//ToDo:shuffle
(function shuffle() {
cards.forEach((cards)=>{
    var index=Math.floor(Math.random()*16);
    cards.style.order =index
    console.log("shuf");
})    
})();

const btn=document.querySelector("btnrefresh",reset())

