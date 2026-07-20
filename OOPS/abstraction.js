class Car {
    start() {
        this.#checkFuel();
        this.#startEngine();
        console.log("Car Started");
    }

    #checkFuel() {
        console.log("Checking fuel...");
    }

    #startEngine() {
        console.log("Starting engine...");
    }
}

const myCar = new Car();

myCar.start();

//The user doesn't know:

//how fuel is checked,
//how the engine starts,
//what steps happen internally.

//Those details are hidden inside private methods.