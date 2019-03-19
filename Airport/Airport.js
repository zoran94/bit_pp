// "use strict"

(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

    };

    Person.prototype.getDataPerson = function () {
        return `${this.name} ${this.surname}`;
    }

    function Seat(number = Math.round(Math.random() * 100) + 10, category = "economy") {
        this.number = number;
        this.category = category;

    };

    Seat.prototype.getDataSeat = function () {
        return `${this.number}, ${this.category}`;
    }

    function Passenger(person, seat) {
        this.seat = seat;
        this.person = person;
    };

    Passenger.prototype.getDataPassenger = function () {
        return `${this.seat.getDataSeat().toUpperCase()}, ${this.person.getDataPerson()}`;
    }


    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date).toLocaleDateString();
        this.passengerList = [];

    };

    Flight.prototype.addPassenger = function (passenger) {
        this.passengerList.push(passenger);

        if (this.passengerList.length > 100) {
            return `there are no seats`
        };


    };

    Flight.prototype.getDataFlight = function () {
        let allPassengers = "";
        for (let i = 0; i < this.passengerList.length; i++) {
            allPassengers += "\n\t" + this.passengerList[i].getDataPassenger();
        }
        return `\n  \n\t ${this.date}, \n\t ${this.relation} \n ${allPassengers}`;

    }



    function Airport() {
        this.name = `Nikola Tesla`;
        this.flightList = [];

    };


    Airport.prototype.addFlight = function (flights) {
        this.flightList.push(flights);
    };

    Airport.prototype.getDataAirport = function () {
        let totalPassengers = 0;
        let allFlights = ""
        for (let i = 0; i < this.flightList.length; i++) {
            totalPassengers += this.flightList[i].passengerList.length;
            allFlights += this.flightList[i].getDataFlight();

        }
        return `Airport : ${this.name} total passengers : ${totalPassengers} \n ${allFlights}`;
    }




    function CreateFlight(relation, date) {

        return new Flight(relation, date);
    };

    function CreatePassenger(person, seat) {

        return new Passenger(person, seat);
    };




    const personOne = new Person("Jonnah", "Mormont");
    const personeTwo = new Person("Barristan", "Selmy");
    const personThree = new Person("Oberyn", "Martell");
    const personFour = new Person("Russ", "Bolton");

    const seatOne = new Seat();
    const seatTwo = new Seat(15, "bussines");
    const seatThree = new Seat(15, "economy");
    const seatFour = new Seat(32);

    const passengerOne = new CreatePassenger(personOne, seatThree);
    const passengerTwo = new CreatePassenger(personFour, seatTwo);
    const passengerThree = new CreatePassenger(personThree, seatOne);
    const passengerFour = new CreatePassenger(personeTwo, seatFour);

    const firstFlight = new CreateFlight("Belgrade-Moscow", "05.23.2018");
    const secondFlight = new CreateFlight("Nis-Malme", "11.10.2018");

    firstFlight.addPassenger(passengerOne);
    firstFlight.addPassenger(passengerTwo);
    secondFlight.addPassenger(passengerThree);
    secondFlight.addPassenger(passengerFour);

    let nikolaTesla = new Airport();
    nikolaTesla.addFlight(firstFlight);
    nikolaTesla.addFlight(secondFlight);


    console.log(nikolaTesla.getDataAirport());


})()





// this.remove = function(relation){

//     var splited = relaton.split("");

//     var str2 = "";
//     for(var i = 0; i < splited.length; i++){
//         if(splited[i] !== "a" && splited[i] !== "e" && splited[i] !== "i" && splited[i] !== "o" && splited[i] !== "u" ){
//             str2+=splited[i]
//         }
//     }
//     var toSplit = str2.split("-");
//     var first =  toSplit[0].charAt(0) + toSplit[0].charAt(toSplit[0].length - 1).toUpperCase(); 
//     var second = toSplit[1].charAt(0) + toSplit[1].charAt(toSplit[1].length - 1).toUpperCase(); 
//     return first + "-" + second;
// }
