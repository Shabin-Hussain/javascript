// Parent class
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

// Child class
class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

// Create object
const dog1 = new Dog();

// Calling inherited method
dog1.eat();   // Animal is eating

// Calling child class method
dog1.bark();  // Dog is barking