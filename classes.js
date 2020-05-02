//Understanding JavaScript Classes
//Classes are basically special functions which we
// declare using the class keyword. 
//We put a constructor method in a class. 
//This is a special method. You initialize properties in the constructor method.

//We have two ways of defining classes in JavaScript.
// Class Declaration,Class Expression

//To declare a class, we use the class keyword with the class name 
//you desire as in the example below where our class name is Person.

//Hoisting : Class decalarations are not hoisted. 
//You first need to declare your class and then access or use it.

// class declaration syntax
class Person {
    constructor(name, country) {
        // initialize Person properties here
        this.name = name;
        this.country = country;
    }
    //Let's add a custom method, Print(), 
    //that prints data fron the person object created on the class Person.

    Print() {
        return `Name : ${this.name} Country : ${this.country}`;
    }
    
}
// create an object, person, on the Person class
let person = new Person(`Velda Kiara`, `London`);

// calling the custom method on the person's object
person.Print();

// sending a parameter to Print()
//Print(title) {
    //return `Title : ${title} Name : ${this.name} Country : ${this.country}`;
 //}
 
 // calling the custom method on the person's object passing a parameter
 person.Print(`CEO`);

 //Static Methods
 //We define static methods on the class and to call it,
//we do it on the class as well. We use the static keyword to define static methods

// defining a static method
 //static Employee(type) {
    //return `${type}`;
 //}
//}
 // calling the static method, 'Employee' on 'Person' and passing a parameter 'type'
 Person.Employee(`Fulltime`);
//}

//We use the extends keyword to create classes which inherit methods from other classes.
// This is basically creating a class as a child of another class.

 // class Salary extends class Person
 class Salary extends Person {
    constructor(name) {
        // call the super class constructor and pass in the 'name' parameter
        super(name);
    }
} 

//Class expressions can be named or unnamed. 
//If named, the name of the class is local to the class body only

// class expression syntax
let Person = class {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    } 
    // create a custom method
    Print() {
        return `Name : ${this.name} Country : ${this.country}`;
    }
}
// create an object, person, on the Person class
let person = new Person(`Velda Kiara`, `London`);
// expected output is Name : Velda Kiara Country : London
console.log(person.Print());







