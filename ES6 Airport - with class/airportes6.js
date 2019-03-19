// "use strict"

(function () {

    class Person {

        constructor(name, surname) {
            this.name = name;
            this.surname = surname;

        };
        getDataPerson() {
            return `${this.name} ${this.surname}`;
        }
    }


    class Seat {

        constructor(number = Math.round(Math.random() * 100) + 10, category = "economy") {
            this.number = number;
            this.category = category;

        };

        getDataSeat() {
            return `${this.number}, ${this.category}`;
        }
    }

    class Passenger {

        constructor(person, seat) {
            this.seat = seat;
            this.person = person;
        };
        getDataPassenger() {
            return `${this.seat.getDataSeat().toUpperCase()}, ${this.person.getDataPerson()}`;
        }
    }



    class Flight {

        constructor(relation, date) {
            this.relation = relation;
            this.date = new Date(date).toLocaleDateString();
            this.passengerList = [];

        };
        addPassenger(passenger) {
            this.passengerList.push(passenger);

            if (this.passengerList.length > 100) {
                return `there are no seats`
            };


        };
        getDataFlight() {
            let allPassengers = "";
            for (let i = 0; i < this.passengerList.length; i++) {
                allPassengers += "\n\t" + this.passengerList[i].getDataPassenger();
            }
            return `\n  \n\t ${this.date}, \n\t ${this.relation} \n ${allPassengers}`;

        }
    }


    class Airport {
        constructor() {
            this.name = `Nikola Tesla`;
            this.flightList = [];
        }

        addFlight(flights) {
            this.flightList.push(flights);
        };

        getDataAirport() {
            let totalPassengers = 0;
            let allFlights = ""
            for (let i = 0; i < this.flightList.length; i++) {
                totalPassengers += this.flightList[i].passengerList.length;
                allFlights += this.flightList[i].getDataFlight();

            }
            return `Airport : ${this.name} total passengers : ${totalPassengers} \n ${allFlights}`;
        }
    };






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

