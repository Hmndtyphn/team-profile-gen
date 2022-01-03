// imports employee constructor to add intern
const Employee = require('./Employee');

// extends intern constructor to employee
class Intern extends Employee {

    // defines Intern data
    constructor (name, id, email, school) {

        // calls employee constructor
        super (name, id, email);

        // defines school 
        this.school = school;
    }

    //  returns school from user input
    getSchool () {
        return this.school;
    }

    // changes employee to Intern role
    getRole () {
        return "Intern";
    }
}

// exports
module.exports = Intern;
