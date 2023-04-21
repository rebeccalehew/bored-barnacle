// requires Employee class for constructor
const Employee = require('./employee');

// Intern class extends Employee class
// start of constructor function
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // sets employee's role to intern
    getRole() {
        return 'Intern';
    }

    // returns the intern's school/university from user input
    getSchool() {
        return this.school;
    }
};

// export for use elsewhere
module.exports = Intern;