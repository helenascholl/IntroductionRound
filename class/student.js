const Person = require('./person');

class Student extends Person {
    constructor(firstName, lastName, gender, hobbies, subject) {
        super(firstName, lastName, gender, hobbies);
        this.subject = subject;
    }

    sayHello() {
        console.log(`Hi. My name is ${this.name.first} and I study ${this.subject}.`);
    }
}

module.exports = Student;