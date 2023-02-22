// Function to start asking the user questions
askQuestions();

// Function to take the user input data and generate an index.html file
function createTeam(){
    fs.writeFileSync('./output/index.html', generateTeam(newTeamMemberData), 'utf-8');
};

// Requirements for node
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/page-template.js');

// Required lib files
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Creates an array of answers based on user input; this array object will be used to create the index.html file
const newTeamMemberData = [];

// Array object questions asked in CLI; answers collected from user input in the command line
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
                message: 'What is your GitHub link?',
                name: 'github',
            },
        ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            EngineerAns.github,
        );
        newTeamMemberData.push(newEngineer);
        
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
        newTeamMemberData.push(newIntern);

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
        newTeamMemberData.push(newManager);
    }
}
// This is the end of the questions for the user.


// Asks user for next step - add another team member or create team index.html page
async function askQuestions(){
    await questions()
    const addTeamMemberAns = await inquirer

    .prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'addTeamMember',
            choices: ['Add new team member', 'Create team'],
        }
    ])

    // If user selects 'Add new team member'
    if (addTeamMemberAns.addTeamMember === 'Add new team member'){
        return askQuestions();

    // If user selects 'Create team'
    } else if (addTeamMemberAns.addTeamMember === 'Create team'){
        return createTeam();
    };
};