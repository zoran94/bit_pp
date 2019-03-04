function Car(model){

    this.model = model;
    this.speed = 0;
    this.engineRanning = false;
    this.passengers = [];
    this.driver = null;

    this.setDriver = function(){
        this.driver = driver
    };
    this.addPassenger = function(person){
        if(this.engineRanning){
            console.log("Please stop the car first!")
        }else {
            this.passengers[this.passengers.length] = person
        };
    this.stopCar = function(){
        if(this.speed > 0){
            console.log("Warning! The engine is stil running!")
        }else{
            this.engineRanning = false;
            console.log("Machine has been stopped!")
        }
    };
    this.removePassenger = function(person, exitMsg){
        if(this.engineRanning){
            console.log("Warning! Machine is still running. Please stop the car!")
        }else
            delete this.passengers[this.passengers.length - 1]; 
        console.log("Passenger " + person.name + " has been ejected from car")
    };
    this.printStatus = function(){

        var passengerNames = "";
        for(var i = 0; i < this.passengers.length; i++){
            passengerNames+=this.passengers[i].name
        }
        return this.model + " are going " + this.speed + " km/h, driver: " + this.driver.name + ", passengers are " + passengers.name
    }
    this.startCar = function(speed){
        this.speed = speed;
        this.engineRanning = true;
    }
    }

}
        function Person(name, id){
            this.name = name;
            this.id = id;
        }
var Milan = new Person("Milan", 23243);
var Nemanja = new Person("Nemanja", 43434);

var golf2 = new Car("Golf2");

golf2.setDriver(Nemanja);
golf2.addPassenger(Milan)
golf2.speed = 0;
golf2.stopCar();

golf2.removePassenger(Milan, "Pozdrav drustvo, vidimo se.")
golf2.startCar(20);
golf2.speed = 0;
golf2.stopCar()


console.log(golf2)

