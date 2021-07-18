// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];

return inquirer.prompt([{
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},
{
    type: 'input',
    name: 'projectName',
    message: "What is your project's name?"
},
{
    type: 'input',
    name: "projectDescription",
    message: "Please write a short description of your project"
},
{
    type: 'checkbox',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
},
{
    type: 'input',
    name: 'instalDependencies',
    message: 'What comman should be run to install dependencies?'
},
{
    type: 'input',
    name: 'runTests',
    message: 'What command should be run to run tests?'
},
{
    type: 'input',
    name: 'usingRepo',
    message: 'What does the user need to know about using the repo?'
},
{
    type: 'input',
    name: 'contributingRepo',
    message: 'What does the user need to know about contributing to the repo?'
},
}])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();