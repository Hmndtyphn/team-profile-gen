// install dependencies
const inquirer = require("inquirer");
const fs= require('inquirer');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const renderHtml = require('./src/renderHtml');

// empty array for team object
const teamObject = [];

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

        teamObject.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    Adding Employees to team
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose employee's role",
            choices: ['Engineer', 'Intern']
        },

        {
            
        }
    ])
}

