var user={
    isHuman:false,
    printFunction: function(){
        console.log(`My name is ${this.name} and .am I human ${this.isHuman}`);
    } 
}
const me =Object.create(user)
me.name ="Ajay"
me.isHuman=true;
me.printFunction()

var am =Object.create(user)
am.name ="Ajay ps"
am.isHuman=true
am.printFunction()