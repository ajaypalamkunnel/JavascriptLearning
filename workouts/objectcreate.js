var person={
    isHuman:false,
    printIntroduction:function(){
        console.log(`I am ${this.name}. am I a human ${this.isHuman}`);
    }
}
var me =Object.create(person);

me.name="Ajay ps"
me.isHuman=true;
me.printIntroduction()