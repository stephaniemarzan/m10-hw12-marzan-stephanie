// YOUR CODE HERE

//your assignment is to create a class named `Car` in JavaScript. This class will create objects that have three properties:

//1. `make` (String) - The car's manufacturer. _E.g. Honda_
//1. `model` (String) - The type of model. _E.g. Civic_
//1. `year` (Integer) - Four digit year the car was made. _E.g. 1998

//setTimeout(function() {
    //(console.log(maintenanceMessage), 3000);
//Your class should also have the following methods:

//- `honk` - This method should log "BEEP BEEP!" to the console when called.
//- `performMaintenance` - This method should use the `setTimeout` function to log "maintenance complete" to the console **after exactly 3 seconds**.

class Car {
    constructor( make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk (){
        console.log('BEEP BEEP!')
    }
    performMaintenance(){
        let maintenanceMessage = "Maintenance Complete";
        setTimeout (function(){
            console.log(maintenanceMessage), 3000})
    }

}
