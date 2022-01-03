// install dependencies
const inquirer = require("inquirer");
const fs= require('inquirer');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const { mngQuestions, teamQuestions, engQuestions, intQuestions } = require('./src/questions');
const renderHtml = require('./src/renderHtml');

// empty array for team object
const teamObject = [];

// starts program when running node index.js


