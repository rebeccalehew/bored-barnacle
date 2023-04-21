class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // returns the employee's name from user input
    getName() {
        return this.name;
    }

    // returns the employee's ID from user input
    getId() {
        return this.id;
    }

    // returns the employee's email from user input
    getEmail() {
        return this.email;
    }

    // returns the employee's role
    getRole() {
        return 'Employee';
    }
}

// exports the Employee class
module.exports = Employee