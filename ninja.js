function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.updateSpeed = function(updateSpeed){
        speed = updateSpeed;
    }
    this.showSpeed = function(){
        console.log(speed)

    }

    this.sayName = function(){
        console.log(name);
    }

    this.showStats = function(){
        console.log("Name: " +this.name)
        console.log("Health: " +this.health)
        console.log("Speed: " +speed)
        console.log("Strength: " +strength)
    }
    this.drinkSake = function(){
        this.health += 10;
        console.log("New Health: "+this.health)
    }
}

var myNinja = new Ninja('Tom')
console.log(myNinja.speed)  //this is won't work because var is private just work inside function
console.log(myNinja.health) //This work because we use this. so can be changed the values too
myNinja.health = 80;
console.log(myNinja.health); //this will update health to 80
myNinja.updateSpeed(25)
myNinja.showSpeed()
myNinja.sayName();
myNinja.showStats();
myNinja.drinkSake();