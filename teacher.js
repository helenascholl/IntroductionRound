const Person = require('./person');

function Teacher(firstName, lastName, gender, hobbies, subject) {
    Person.call(this, firstName, lastName, gender, hobbies);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.sayHello = function () {
    let output = 'Hello. My name is Mr';

    if (this.gender == 'female') {
        output += 's';
    }

    console.log(`${output}. ${this.name.last} and I teach ${this.subject}.`);
};

module.exports = Teacher;