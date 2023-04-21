// requires Employee class for constructor
const Employee = require('./employee');

// Engineer class will extend to Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // sets employee's role to Engineer
    getRole() {
        return 'Engineer';
    }

    // returns GitHub from user input
    getGithub() {
        return this.github;
    }
}

// exports for use elsewhere
module.exports = Engineer