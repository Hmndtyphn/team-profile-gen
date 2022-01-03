// import employee constructor to add engineer as employee
const Employee = require('./Employee');

// extends engineer constructor to employee
class Engineer extends Employee {
   
    // defines engineer data
    constructor (name, id, github, email) {
        // calls the employee constructor
        super (name, id, email);

        // define's github 
        this.github = github;
    }

    //  returns github from user created input
    getGitHub () {
        return this.github;
    }

    // changes employee role to Engineer role
    getRole () {
        return "Engineer";
    }
}

// exports
module.exports = Engineer;
