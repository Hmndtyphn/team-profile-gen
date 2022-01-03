// import Employee constructor to define manager as employee
const Employee = require('./Employee');

// extends managewr constructor to employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        // this calls the employee constructor
        super (name, id, email);
        
        // defines officeNumber
        this.officeNumber = officeNumber;
    }

    // Creates Manager role
    getRole () {
        return "Manager";
    }
}

// exports
module.exports = Manager;
