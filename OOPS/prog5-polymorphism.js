//runtime polymorphism - sound method is overridden by Dog and Cat classes
class Animal { 
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();
const ani = new Animal()

dog.sound();
cat.sound();
ani.sound();