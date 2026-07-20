const animal = {
    eat() {
        console.log("Animal is eating");
    }
};

const dog = {
    bark() {
        console.log("Dog is barking");
    }
};

// Make animal the prototype of dog
dog.__proto__ = animal;

dog.bark(); // Dog is barking
dog.eat();  // Animal is eating 