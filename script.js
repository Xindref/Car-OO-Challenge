// make our Vehicle class
class Vehicle {
    // set up constructor for make, model, and year
    constructor(make, model, year) {
        // set this values to passed in values
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // method of "honk" which should return "Beep"
    honk() {
        return "Beep.";
    }
    // method of "toString" which returns the string containing the make, model, and year
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

// make our Car class that inherits from Vehicle
class Car extends Vehicle {
    // set constructor to pass in same values
    constructor(make, model, year) {
        // call super to mimic functionality of constructor in Vehicle class
        super(make, model, year);
        // set our new numWheels to 4 for the Car class
        this.numWheels = 4;
    }
}

// make our Motorcycle class that inherits from Vehicle
class Motorcycle extends Vehicle {
    // set constructor to pass in same values
    constructor(make, model, year) {
        // call super to mimic functionality of construct in Vehicle class
        super(make, model, year);
        // set our numWheels to 2 for the Motorcycle class
        this.numWheels = 2;
    }
    // make new method for Motorcycle called revEngine that returns "VROOM!!!"
    revEngine() {
        return "VROOM!!!";
    }
}

// make a class for Garage that holds Vehicles
class Garage {
    // set capacity for how many Vehicles will fit in constructor
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    // make an add method which will add a vehicle to an array of vehicles
    add(vehicle) {
        // if vehicle is not an instance of class Vehicle, return not allowed
        if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        // if vehicle array length is greater than or equal to capacity, refuse
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        // if we are an instance, and not at capacity, then we add to vehicle array
        this.vehicles.push(vehicle);
        return `${vehicle.make} ${vehicle.model} added to garage!`;
    }
}