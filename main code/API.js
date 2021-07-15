fetch('https://api.chucknorris.io/jokes/random')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    //console.log("DATA is:",data);
    var joke=data.value;
    console.log("joke:",joke);

    var category=data.value;
    console.log("catagory:",category);

    var query=data.value;
    console.log("query:",query);
})
.catch()
//this code run only in browser




