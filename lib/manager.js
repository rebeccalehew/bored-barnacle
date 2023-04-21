// requires Employee class for constructor
const Employee = require('./employee');

// Manager class extends employee class/constructor function
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // sets employee's role to manager
    getRole() {
        return 'Manager';
    }
    
    // sets manager's office number from user input
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// exports for future use elsewhere.
module.exports = Manager