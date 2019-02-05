const Person = require('./person');

class Teacher extends Person {
    constructor(firstName, lastName, gender, hobbies, subject) {
        super(firstName, lastName, gender, hobbies);
        this.subject = subject;
    }

    sayHello() {
        let output = 'Hello. My name is Mr';

        if (this.gender === 'female') {
            output += 's';
        }

        console.log(`${output}. ${this.name.last} and I teach ${this.subject}.`);
    }
}

module.exports = Teacher;