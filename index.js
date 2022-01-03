// install dependencies
const inquirer = require("inquirer");
const fs= require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const renderHtml = require('./src/renderHtml');

// empty array for team object
const teamArr = [];

// starts program when running node index.js
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Who is this teams manager?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter managers name");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "enter managers ID",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Enter Manager ID")
                    return false;
                } else {
                    return true;
                }
            }

        },

        {
            type: 'input',
            name: 'email',
            message: "Enter Managers Email",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Enter manager email')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter managers office number",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ('Enter manager office number')
                    return false
                } else {
                    return true;
                }
            }
        }
        
    ])

    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArr.push(manager);
        console.log(manager);
    })
};

// adding role for Enginer/ Intern
const addEmployee = () => {
    console.log(`
    Adding Employees to team
    `);

    // Choose a role
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose employee's role",
            choices: ['Engineer', 'Intern']
        },
        // name employee
        {
            type: 'input',
            name: 'name',
            message: "Input employee name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter Employee name");
                    return false;
                }
            }
        },
        // enter employee ID
        {
            type: 'input',
            name: 'id',
            message: "Enter Employee ID",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Enter employee ID")
                    return false;
                } else {
                    return true;
                }
            }
        },
        // Engineer github username
        {
            type: 'input',
            name: 'github',
            message: "Enter github username",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("enter employees github username")
                }
            }
        },

        // enter employee email
        {
            type: 'input',
            name: 'email',
            message: "Enter employee email",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Enter employee email')
                    return false;
                }
            }
        },
        // enter school when intern is chosen
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's current school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("enter intern's current school")
                }
            }
        },
        // add more employees
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Add more team members?',
            default: false
        }
    ])
        // employee data
        .then(employeeData => {
            const { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            const employee;

            // if Engineer is chosen, ensure all engineer fields are filled
            if (role === "Engineer") {
                employee = new Engineer (name, id, email, github);
                console.log(employee);

            // if Intern is chosen, ensure all Intern fields are filled
            } else if (role === "Intern") {
                employee = new Intern (name, id, email, school);
                console.log(employee);
            }
            
            teamArr.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArr);
            } else {
                return teamArr;
            }

        })
};

// generates html page using fs
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // when error occurs run this
        if (err) {
            console.log(err);
            return;
// if error does not occur
        } else {
            console.log("Your profile has been created!")
        }
    })
};

// add's role/ employee to array
addManager()
.then(addEmployee)
.then(teamArr => {
    return renderHtml(teamArr);
})
// adds them to page
.then(pageHtml => {
    return writeFile(pageHtml);
})
.catch(err => {
    console.log(err);
});






