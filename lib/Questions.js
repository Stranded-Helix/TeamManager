const inquirer = require('inquirer');
const { checkName, checkNumber, checkEmail } = require('../src/Helpers');

const nameQuestion = {
    type: 'input',
    message: 'Enter Name:',
    name: 'name',
    validate: checkName
}

const idQuestion = {
    type: 'input',
    message: 'Enter Employee ID:',
    name: 'id',
    validate: checkNumber
}

const emailQuestion = {
    type: 'input',
    message: 'Enter E-mail Address:',
    name: 'email',
    validate: checkEmail
}

const officeNumberQuestion = {
    type: 'input',
    message: 'Enter Office Number:',
    name: 'officeNumber',
    validate: checkNumber
}

const githubQuestion = {
    type: 'input',
    message: 'Enter Github Username:',
    name: 'github',
    validate: checkName
}

const schoolQuestion = {
    type: 'input',
    message: 'Enter School Name:',
    name: 'school',
    validate: checkName
}

const positionSelectQuestion = () => {
    return inquirer.prompt({
        type: "list",
        name: "position",
        message: "Choose an option:",
        choices: [
            { name: "Add an Engineer", value: "engineer" },
            { name: "Add an Intern", value: "intern" },
            { name: "Generate Webpage", value: "end" }
        ]
    })
}

const ManagerQuestion = () => {
    return inquirer.prompt([
        nameQuestion,
        idQuestion,
        emailQuestion,
        officeNumberQuestion
    ])
}

const EngineerQuestion = () => {
    return inquirer.prompt([
        nameQuestion,
        idQuestion,
        emailQuestion,
        githubQuestion
    ])
}

const InternQuestion = () => {
    return inquirer.prompt([
        nameQuestion,
        idQuestion,
        emailQuestion,
        schoolQuestion
    ])
}

module.exports = {
    positionSelectQuestion,
    ManagerQuestion,
    EngineerQuestion,
    InternQuestion
}