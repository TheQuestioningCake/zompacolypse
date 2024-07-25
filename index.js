const fs = require('fs');
const inquirer = require('inquirer');
// const scenario = require('./utils/scenarios.js')


const adventure = [
    {
        type: 'input',
        name: 'player-name',
        message: 'What is your name?',
        validate: function (input) {
            if(input.trim() === '') {
                return 'Please enter a name for your character';
            }
            return true;
        },
        when: function(answers) {
            console.log(`Welcome to your death ${answers['player-name']}`);
            return true;
        }
    },
    {
        type: 'list',
        name: 'intro',
        message: 'Choose your weapon?',
        choices: ['Knife', 'Frying pan', 'Baseball bat', 'Pistol'],
    }
];

inquirer.prompt(adventure.slice(0, 1)).then(answers => {
    console.log(`Welcome to your death ${answers['player-name']}`);
    return inquirer.prompt(adventure.slice(1)).then(moreAnswers => {
        // Combine the answers from both prompts
        const allAnswers = { ...answers, ...moreAnswers };
        
        // Log a different message for each weapon choice
        switch (allAnswers.intro) {
            case 'Knife':
                console.log('You chose the Knife. Sharp choice!');
                break;
            case 'Frying pan':
                console.log('You chose the Frying pan. Ready to cook up some trouble!');
                break;
            case 'Baseball bat':
                console.log('You chose the Baseball bat. Batter up!');
                break;
            case 'Pistol':
                console.log('You chose the Pistol. Locked and loaded!');
                break;
            default:
                console.log('You chose an unknown weapon.');
        }
    });
});