const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

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
            createHTML();
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

function createHTML()
{
    const head = 
    `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
            <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            </link>
            <title>Employees</title>
        
        
            <style>
                .card-columns {
                    @include media-breakpoint(lg) {
                        column-count: 4;
                    }
        
                    html {
                        padding: 20px;
                        margin: 20px;
                    }
        
                    body {
                        padding: 20px;
                        margin: 20px;
                    }
        
                    html {
                        height: 100%;
                    }
        
                    body {
                        height: 100%;
                    }
        
                    .wrapper {
                        height: 100%;
                    }
            </style>
        </head>
        
        <body>
        
            <div class="wrapper">
                <div class="card text-center">
                    <div class="card-header top card border-dark mb-4">
                        <h5>My Team</h5>
                    </div>
                <div class="card-body">
    `
    const end = 
    `   
        </div>
        </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"></script>
    </body>

    </html>
    `

    let html = "";
    html += head;
    let content = ""

    group.forEach(p => {
        content+= `
                    <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4">
                        <div class="card border-dark mb-4" style="width: 19rem;">
                            <div class="card-header">
                                <h5>${p.getRole()}</h5>
                                <h5>${p.getName()}</h5>
                            </div>

                        <div class="card-body text-dark">
                            <div class="card" style="width: 16rem;">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item" style="text-align:left"><strong>${p.getID()}</strong></li>
                                    <li class="list-group-item" style="text-align:left"><strong><a href="mailto:${p.getEmail()}"> Email:${p.getEmail()} </a> </strong>
                                    </li>
                                    <li class="list-group-item" style="text-align:left"><strong>${p.getSpecial()}</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                `
    })

    html += content;
    html += end;

    fs.writeFile("./dist/index.html", html, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
}