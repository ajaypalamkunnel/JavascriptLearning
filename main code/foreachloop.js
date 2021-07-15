//forIn loop here no checking and increment all done automatically

 ar=[10,20,30,40,50,60,70,80,90];
// sum=0
// for(i in ar){  
//     sum=sum+ar[i]
// }
// console.log(sum);


//foreachloop
ar.forEach(function (value,index){
    console.log(value,index);
})

info=[{name:"ajay" ,place:"Rampuram"},{name:"hitesh" ,place:"Rajasthan"}]

info.forEach(function(value,index){
    //value can be taken from the array
    console.log(value.name);
})