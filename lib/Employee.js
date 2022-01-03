// contsructor for employee
class Employee {
    constructor (name, id, email) {
        // defines name input from user
        this.name = name;
        // defines id input from user
        this.id = id;
        // defines email input from user
        this.email = email
    }

    // returns name from user 
    getName () {
        return this.name;
    }

    // returns ID from user input
    getId () {
        return this.id;
    }

    // return email from user input
    getEmail () {
        return this.email;
    }

    // returns the employee type (manager/ Engineer/ Intern)
    getRole () {
        return 'Employee';
    }
};

// exports 
module.exports = Employee;
