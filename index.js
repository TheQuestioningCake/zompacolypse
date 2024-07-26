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
        name: 'intialWeapon',
        message: 'Choose your weapon?',
        choices: ['Knife', 'Frying pan', 'Baseball bat', 'Pistol'],
    },
    {
        type: 'list',
        name: 'direction',
        message: 'Choose a direction',
        choices: ['North', 'South', 'East', 'West']
    }
];

inquirer.prompt(adventure.slice(0, 1)).then(answers => {
    console.log(`Welcome to your death ${answers['player-name']}`);
    return inquirer.prompt(adventure.slice(1, 2)).then(intialWeaponChoice => {

        const allAnswers = { ...answers, ...intialWeaponChoice };
        
        switch (allAnswers.intialWeapon) {
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
    return inquirer.prompt(adventure.slice(2)).then(intialDirectionChoice => {

        const directionChoice = {...allAnswers, ...intialDirectionChoice}

        switch(directionChoice.direction) {
            case 'North':
                console.log('You spot a house in distance');
                break;
            case 'South':
                console.log('You spot a figure in the distance');
                break;
            case 'East':
                console.log('You spot a car crash in the distance');
                break;
            case 'West':
                console.log('You spot a road leading towards town');
                break;
            default:
                console.log('You need to choose a direction');
        }
    })
    });
});