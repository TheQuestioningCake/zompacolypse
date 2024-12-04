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

const firstDirectionChoice = {
    'North': {
        type: 'list',
        name: 'northAction',
        message: 'Do you proceed foward?',
        choices: ['Yes', 'No']
    },
    'South': {
        type: 'list',
        name: 'southAction',
        message: 'Do you proceed foward?',
        choices: ['Yes', 'No']
    },
    'East': {
        type: 'list',
        name: 'eastAction',
        message: 'Do you proceed foward?',
        choices: ['Yes', 'No']
    },
    'West': {
        type: 'list',
        name: 'westAction',
        message: 'Do you proceed foward?',
        choices: ['Yes', 'No']
    }
};

const directionPrompt = {
    type: 'list',
    name: 'direction',
    message: 'Choose a direction',
    choices: ['North', 'South', 'East', 'West']
}

const firstNorth = [
    {
        type: 'list',
        name: 'enterFirstHouse',
        message: "You've walked up to decrepit house, it appears as if no one has lived here even before the apocalpyse began. Do you enter?",
        choices: ['Yes', 'No']
    }
]

const firstNorthHouse = [
    {
        type: 'list',
        name: 'firstHouseChoices',
        message: "You've entered the house, there's a rotten smell in the air. Before you lays a set of crooked stairs, to your right looks like what used to be a kitchen, and to your left rest the remains of the family that used to live here.",
        choices: ['Up', 'Right', 'Left']
    }
]

function handleDirectionChoice(directionChoice) {
    switch (directionChoice.direction) {
        case 'North':
            console.log('You spot a house in distance');
            return inquirer.prompt(firstNorth).then(northAnswers => {
                if (northAnswers.enterFirstHouse === 'Yes') {
                    console.log('You decided to enter the house, but be wary, danger may be afoot');
                    return inquirer.prompt(firstNorthHouse).then(firstNHanswers =>  {

                        switch(firstHouseChoices) {
                            case 'Up': 
                                console.log('You walk up the steps nearly plummeting through a decaying step, as you reach the top you spot a figure')
                                break;
                            case 'Right':
                                console.log('You walk into the kitchen, rats disperse in every direction. The air fouler than you first entered. You see a figure hovering over the stove. They grunt eerily')
                                break;
                            case 'Left':
                                console.log('As you enter the livingroom, the family rises. They rush you and tackle you down. Swiftly knawing at your neck and clawing you apart. GAME OVER')
                        }
                    })
                } else {
                    console.log('You decided to turn back around');
                    return inquirer.prompt([directionPrompt]).then(newDirectionChoice => {
                        console.log(`You decided to go ${newDirectionChoice.direction} instead`);
                        return handleDirectionChoice(newDirectionChoice); // Recursively handle the new direction choice
                    });
                }
            });
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
}

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
            const directionChoice = { ...allAnswers, ...intialDirectionChoice };
            return handleDirectionChoice(directionChoice);
        });
    });
});