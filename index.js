
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const nextEmployee = [
    {
        type: 'list',
        name: 'employeeRole',
        message: 'What is your next employee? (Required)',
        choices: ["Manager", "Engineer", "Intern", "Done"]
    }
];

const ManagerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your Employee ID? (Required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter your Employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number? (Required)',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter what your office number!');
                return false;
            }
        }
    }
];

const EngineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your Employee ID? (Required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter your Employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter what your github!');
                return false;
            }
        }
    }
];

const InternQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your Employee ID? (Required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter your Employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is your school? (Required)',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter what your school!');
                return false;
            }
        }
    }
];

var group = [];

function nextQuestion()
{
    inquirer.prompt(nextEmployee)
    .then(answers  => { 
        answers.employeeRole
        switch(answers.employeeRole)
        {
            case "Manager":
            managerQ();
                break;
            case "Intern":
            internQ();
                break;
            case "Engineer":
            engineerQ();
                break;
            case "Done":
                break;
        }
     })
}

const managerQ = () => {

    return inquirer.prompt(ManagerQuestions)
    .then(readmeData => {
        let mana = new Manager(readmeData.name, readmeData.id, readmeData.email, readmeData.officeNumber);
        console.log(mana);
        group.push(mana);
        nextQuestion();
    })
}

const engineerQ = () => {

    return inquirer.prompt(EngineerQuestions)
    .then(readmeData => {
        let engin = new Engineer(readmeData.name, readmeData.id, readmeData.email, readmeData.github);
        console.log(engin);
        group.push(engin);
        nextQuestion();
    })
}

const internQ = () => {

    return inquirer.prompt(InternQuestions)
    .then(readmeData => {
        let inte = new Intern(readmeData.name, readmeData.id, readmeData.email, readmeData.school);
        console.log(inte);
        group.push(inte);
        nextQuestion();
    })
}

nextQuestion();