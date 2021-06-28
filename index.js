const inquirer = require(`inquirer`);
const fs = require('fs');
const {Manager} = require(`./lib/Manager.js`);
const {Engineer} = require('./lib/Engineer.js');
const {Intern} = require('./lib/Intern.js');
const { positionSelectQuestion, ManagerQuestion, EngineerQuestion, InternQuestion } = require('./lib/Questions.js')

const html = ``;
const teamMembers = [];

const mainMenu = () => {
    console.log("Enter the Manager's information");
    ManagerQuestion()
        .then((managerAnswers) => {
            teamMembers.push(new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber))
        })
        .then(() => {
            employeeMenu();
        })
}

const employeeMenu = () => {
    positionSelectQuestion()
        .then(positionSelectAnswer => {
            switch (positionSelectAnswer.position) {
                case "engineer":
                    console.log("Enter the Engineer's information");
                    EngineerQuestion()
                        .then(engineerAnswers => {
                            teamMembers.push(new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github));
                            employeeMenu();
                        })
                    break;
                case "intern":
                    console.log("Enter the Intern's information");
                    InternQuestion()
                        .then(internAnswers => {
                            teamMembers.push(new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school));
                            employeeMenu();
                        })
                    break;
                default:
                    genHTML(teamMembers);
                    console.table(teamMembers);
                    return;
            }
        })
}

const genHTML = (employeeList) => {
    let cardList = ``;
    employeeList.forEach(x => {
        switch (x.getRole()) {
            case "Manager":
                cardList = cardList + genManagerCard(x);
                console.log(cardList);
                break;
            case "Engineer":
                cardList = cardList + genEngineerCard(x);
                console.log(cardList);
                break;
            case "Intern":
                cardList = cardList + genInternCard(x);
                console.log(cardList);
                break;
            default:
                break;
        }
    })
    let allHTML = `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="./css/style.css">
    </head>
    
    <body>
        <div class="title-bar">
            <h3 class="title">
                Team
            </h3>
        </div>
        <div id="viewport" class="card-container">
        
            ${cardList}
            
            </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script src="" async defer></script>
    </body>
    
    </html>
    `;
    fs.writeFile(__dirname + '/dist/index.html', allHTML, () => console.log("Team List Generated"));
    
}

const genManagerCard = (managerObject) => {
return (`<div class="employee-card">
<div class="title-block">
    <div class="id">ID: ${managerObject.id}</div>
    <div class="emp-name">${managerObject.name}</div>
    <div class="emp-role">${managerObject.getRole()}</div>
</div>
<a class="emp-email" href="mailto:${managerObject.email}">Email: ${managerObject.email}</a>
<div class="extra">Office: ${managerObject.office}</div>
</div>`)
}

const genEngineerCard = (engineerObject) => {
    return (`<div class="employee-card">
    <div class="title-block">
        <div class="id">ID: ${engineerObject.id}</div>
        <div class="emp-name">${engineerObject.name}</div>
        <div class="emp-role">${engineerObject.getRole()}</div>
    </div>
    <a class="emp-email" href="mailto:${engineerObject.email}">Email: ${engineerObject.email}</a>
    <a class="extra" href="https://github.com/${engineerObject.github}">Github: ${engineerObject.github}</a>
    </div>`)
}

const genInternCard = (internObject) => {
    return (`<div class="employee-card">
    <div class="title-block">
        <div class="id">ID: ${internObject.id}</div>
        <div class="emp-name">${internObject.name}</div>
        <div class="emp-role">${internObject.getRole()}</div>
    </div>
    <a class="emp-email" href="mailto:${internObject.email}">Email: ${internObject.email}</a>
    <div class="extra">School: ${internObject.school}</div>
    </div>`)
}

//function calls
mainMenu();


