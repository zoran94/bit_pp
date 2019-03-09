
(function () {
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var data = this.name.charAt(0) + this.name.charAt(this.name.length - 1)
            return data;
        }
    }
    function CreateMovie(title, genre, duration) {
        this.title = title;
        this.genre = genre.name;
        this.duration = duration;
        this.getData = function () {
            var movieInfo = this.title + ", " + this.duration + "min, " + genre.getData();
            return movieInfo;
        }
    }
    function CreateProgram(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumberOfMovies = null; //ako ga ne apdejtujemo ostaje pocetna vrednost
        this.addMovie = function (addMovie) {
            this.listOfMovies.push(addMovie);
            this.totalNumberOfMovies = this.listOfMovies.length;
        };
        this.totalDurationOfMovies = function (){
            var programDuration = 0;
            for (var i = 0; i < this.listOfMovies.length; i++){
                programDuration += this.listOfMovies[i].duration;
               }
            return programDuration;
        }
        this.getDatas = function () {
            // var  totalLength = (function(){    ne prepoznaje listOfMovies kao properti objekta
            //     var moviesTotalDuration = 0;
            //     for (var i = 0; i < this.listOfMovies.length; i++){
            //         moviesTotalDuration += this.listOfMovies[i].duration; 
            //     }
            //     return moviesTotalDuration;
            // })();
            var totalLength = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                totalLength += this.listOfMovies[i].duration;
            }
            console.log(this.date, totalLength);
            for (var i = 0; i < this.listOfMovies.length; i++) {
                console.log(this.listOfMovies[i].getData());
            }
        }
    }
    function CreateFestival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfMovies = function () {
            var totalProgramMovies = 0;
            for (var i = 0; i < this.listOfPrograms.length; i++) {
             totalProgramMovies += this.listOfPrograms[i].totalNumberOfMovies;
            }
            return totalProgramMovies;
        };
        this.addProgram = function(program) {
            this.listOfPrograms.push(program);
        }
        this.getData = function(){
           console.log(this.name + " has " + this.numberOfMovies() + " movie titles ");
           var totalDuration = 0;
           for (var i = 0; i < this.listOfPrograms.length; i++){
               totalDuration += this.listOfPrograms[i].totalDurationOfMovies();
              
               console.log(this.listOfPrograms[i].date, totalDuration);
               console.log(this.listOfPrograms[i].listOfMovies);
               totalDuration = 0;
           } 
        }
    }

    var comedy = new Genre("Comedy");
    var action = new Genre("Action");
    var drama = new Genre("Drama");
    var uZmajevomGnijezdu = new CreateMovie("uZmajevomGnijezdu", comedy, 125);
    var terminator2 = new CreateMovie("terminator2", action, 180);
    var mrNobody = new CreateMovie("mrNobody", drama, 140);
    var firstDay = new CreateProgram("8.15.2019");
    var secondDay = new CreateProgram("9.10.2019");
    firstDay.addMovie(uZmajevomGnijezdu);
    firstDay.addMovie(terminator2);
    firstDay.addMovie(mrNobody);
    secondDay.addMovie(uZmajevomGnijezdu);
    secondDay.addMovie(terminator2);
    secondDay.addMovie(mrNobody);
    var weekendFestival = new CreateFestival("Weekfest");
    weekendFestival.addProgram(firstDay);
    weekendFestival.addProgram(secondDay);
    weekendFestival.getData();
})();
















//  Task 9 Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 9 seconds
   

    function getTime(start, end){


        var first = start.split(":");
        var second = end.split(":");

        var getFirstDate = new Date();
        getFirstDate.setHours(first[0], first[1], first[2]);

        var getSecondDate = new Date();
        getSecondDate.setHours(second[0], second[1], second[2]);
        
        var result = getSecondDate - getFirstDate;
      
            var hours = Math.floor(result/ 1000/ 60/ 60);  // // Convert milliseconds to hours

            var minutes = Math.floor((result - hours * 3600000)/ 60000);

            var seconds = Math.floor((result - hours * 3600000 - minutes * 60000)/ 1000)
           
            return "" + hours + ":" + minutes + ":" + seconds;

    }

    console.log(getTime("8:22:13", "11:43:22"))






    
