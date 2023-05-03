// Requirements for node
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Required lib files
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateTeam = require('./src/generateHTML');

// Creates an array of answers based on user input; this array object will be used to create the index.html file
const team = [];

// Array object questions asked in CLI; answers collected from user input 
const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'list',
            message: 'What is your role on the team?',
            name: 'role',
            choices: ['Engineer', 'Intern', 'Manager'],
        },
    ])

    // If user selects the Engineer team member role
    if (answers.role === 'Engineer') {
        const EngineerAns = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github',
            },
        ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            EngineerAns.github,
        );
        team.push(newEngineer);
        
    // If user selects the Intern team member role    
    } else if (answers.role === 'Intern') {
        const InternAns = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What school did you attend?',
                name: 'school',
            },
        ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            InternAns.school,
        );
        team.push(newIntern);

    // If user selects the Manager team member role
    } else if (answers.role === 'Manager') {
        const ManagerAns = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'officeNumber',
            },
        ])
        const newManager = new Manager(
            answers.name,                    
            answers.id,
            answers.email,
            ManagerAns.officeNumber,
        );
        team.push(newManager);
    }
}
// This is the end of the questions for the user.


// Asks user for next step - add another team member or create team index.html page
async function askQuestions(){
    await questions()
    const addTeamAns = await inquirer

    .prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'addTeamMember',
            choices: ['Add new team member', 'Create team'],
        }
    ])

    // If user selects 'Add new team member'
    if (addTeamAns.addTeamMember === 'Add new team member'){
        return askQuestions();

    // If user selects 'Create team', then return the entire team object.
    } else if (addTeamAns.addTeamMember === 'Create team'){
        return function createTeam(team) {
            for (let i =0; i < team.length; i++) {
                return team[i],
                console.log('Your team has been created!')
            };
        };
    };
};

// // Function to start asking the user questions
askQuestions();


// Function to take the user input data (to JSON?) and generate an index.html file
// Take in user input answers from inquirer prompts, create new data object
// Use data object to plug in to html cards
// SOOO take the generateTeam data and append to a generateTeamHTML.js...export the generateTeam or maybe createTeam function for use in the generateTeamHTML.js?

function appendCreateTeam() {
    fs.writeFileSync(
        path.join(path.resolve(__dirname, 'dist'), 'index.html'),
        createTeam(team),
        console.log('All done! Your team profile app has been generated.')
    );
};