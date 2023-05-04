// Requirements for node
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Required lib files
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML');

// creates an array where team member profiles are pushed
const team = [];

// team manager question prompts begin
managerQuestions = async () => {
    return (
        await inquirer.prompt([
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the manager's employee ID?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the manager's email address?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'officeNumber',
            }
        ])

        // add new team manager profile and push it to the team array
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            team.push(manager);
            console.log(manager);
            addEmployee();
        })
    )
};

// initialize function
managerQuestions();

// add employees to manager's team
addEmployee = async () => {
    console.log(`Welcome to your team! Continue on to add more members or finish creating your team.`);

    const answer = await inquirer.prompt([
        {
            type: "list",
            message: "Add a team member or finish creating your team.",
            choices: ["Engineer", "Intern", "Finish Creating My Team"],
            name: "role"
        },
    ]);
    // switches the role of team member based on user input
    switch (answer.role) {
        case "Engineer":
            engineerQuestions();
            break;
        case "Intern":
            internQuestions();
            break;
        default:
            finishCreateTeam();
    }
};

// team engineer question prompts begin
engineerQuestions = async () => {
    const engineerInput = await inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the engineer's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github"
        }
    ]);

    const { name, id, email, github } = engineerInput;
    const engineer = new Engineer(name, id, email, github);
    team.push(engineer);
    console.log(engineer);
    addEmployee();
}

// team intern question prompts begin
internQuestions = async () => {
    const internInput = await inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "Where did the intern attend university?",
            name: "school"
        }
    ])
    .then((internInput) => {
        const { name, id, email, school } = internInput;
        const intern = new Intern(name, id, email, school);
        team.push(intern);
        console.log(intern);
        addEmployee();
    });
}

// when the user is finished creating their team, an HTML file is generated in the dist directory
finishCreateTeam = () => {
    fs.writeFileSync(
        path.join(path.resolve(__dirname, "dist"), "team.html"),
        generateHTML(team),
        console.log("Finished! Your team profile has been created!")
    );
}
