function Person(firstName, lastName, gender, hobbies) {
    this.name = {
        first: firstName,
        last: lastName
    };

    this.gender = gender;
    this.hobbies = hobbies;
}

Person.prototype.sayHello = function () {
    console.log(`Hello. My name is ${this.name.first} ${this.name.last}.`);
};

Person.prototype.tellHobbies = function () {
    switch (this.hobbies.length) {
        case 0:
            console.log('I have no hobbies.');
            break;

        case 1:
            console.log(`My only hobby is ${this.hobbies[0]}.`);
            break;

        default:
            console.log('My hobbies are:');

            for (let hobby of this.hobbies) {
                console.log(` - ${hobby}`);
            }
            break;
    }
};

module.exports = Person;