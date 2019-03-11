// "use strict"

(function () {


    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getDataPerson = function () {
            return this.name + " " + this.surname;
        }
    };

    function Seat(number, category) {
        this.number = number || Math.round(Math.random() * 100) + 10;
        this.category = category || "e";

        this.getDataSeat = function () {
            return this.number + ", " + this.category;
        }
    };

    function Passenger(person, seat) {

        this.getDataPassenger = function () {
            return seat.getDataSeat().toUpperCase() + ", " + person.getDataPerson();
        }
    };

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date).toLocaleDateString();
        this.passengerList = [];

        this.addPassenger = function (passenger) {
            this.passengerList.push(passenger);
        };

        this.getDataFlight = function () {
            var allPassengers = "";
            for (var i = 0; i < this.passengerList.length; i++) {
                allPassengers += "\n\t" + this.passengerList[i].getDataPassenger();
            }
            return "\n" + "\n\t" + this.date + ", " + "\n\t" + this.relation + "\n" + allPassengers;

        }
    };


    function Airport() {
        this.name = "Nikola Tesla";
        this.flightList = [];

        this.addFlight = function (flights) {
            this.flightList.push(flights);
        };

        this.getDataAirport = function () {
            var totalPassengers = 0;
            var allFlights = ""
            for (var i = 0; i < this.flightList.length; i++) {
                totalPassengers += this.flightList[i].passengerList.length;
                allFlights += this.flightList[i].getDataFlight();

            }
            return "Airport : " + this.name + " " + "total passengers :" + totalPassengers + " \n" + allFlights;
        }
    };



    function CreateFlight(relation, date) {

        return new Flight(relation, date);
    };

    function CreatePassenger(person, seat) {

        return new Passenger(person, seat);
    };




    var personOne = new Person("Jonnah", "Mormont");
    var personeTwo = new Person("Barristan", "Selmy");
    var personThree = new Person("Oberyn", "Martell");
    var personFour = new Person("Russ", "Bolton");

    var seatOne = new Seat();
    var seatTwo = new Seat(12, "b");
    var seatThree = new Seat(15, "e");
    var seatFour = new Seat(32);

    var passengerOne = new CreatePassenger(personOne, seatThree);
    var passengerTwo = new CreatePassenger(personFour, seatTwo);
    var passengerThree = new CreatePassenger(personThree, seatOne);
    var passengerFour = new CreatePassenger(personeTwo, seatFour);

    var firstFlight = new CreateFlight("Belgrade-Moscow", "05.23.2018");
    var secondFlight = new CreateFlight("Nis-Malme", "11.10.2018");

    firstFlight.addPassenger(passengerOne);
    firstFlight.addPassenger(passengerTwo);
    secondFlight.addPassenger(passengerThree);
    secondFlight.addPassenger(passengerFour);

    var nikolaTesla = new Airport();
    nikolaTesla.addFlight(firstFlight);
    nikolaTesla.addFlight(secondFlight);


    console.log(nikolaTesla.getDataAirport());







})()







var name = "Belgrade-Paris";
var name1 = name.split("");
//var getFirst = name1[0][0];


var letters = "aeiou";
var splited = letters.split("");
var str1 = "";
for (var i = 0; i < name1.length; i++) {
    for (var j = 0; j < letters.length; j++) {

    }
};
console.log(str1);


