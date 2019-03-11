const Person = require('./person');

class Teacher extends Person {
    constructor(firstName, lastName, gender, hobbies, subject) {
        super(firstName, lastName, gender, hobbies);
        this.subject = subject;
    }

    sayHello() {
        let string = 'Hello my name is Mr';

        if (this.gender === 'female') {
            string += 's';
        }

        string += `. ${this.name.first} and I teach ${this.subject}.`;

        console.log(string);
    }
}

module.exports = Teacher;