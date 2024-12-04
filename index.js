const fs = require('fs');
const inquirer = require('inquirer');

const adventure = [
    {
        type: 'input',
        name: 'player-name',
        message: 'What is your name?',
        validate: function (input) {
            if (input.trim() === '') {
                return 'Please enter a name for your character';
            }
            return true;
        },
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
        choices: ['North', 'South', 'East', 'West'],
    },
];

const playerState = {
    name: '',
    weapon: '',
    health: 100,
    inventory: [],
};

const firstNorth = [
    {
        type: 'list',
        name: 'enterFirstHouse',
        message: "You've walked up to a decrepit house. Do you enter?",
        choices: ['Yes', 'No'],
    },
];

const firstNorthHouse = [
    {
        type: 'list',
        name: 'firstHouseChoices',
        message:
            "There's a rotten smell in the air. You see stairs, a kitchen, and a living room. Where do you go?",
        choices: ['Up', 'Right', 'Left'],
    },
];

const directionPrompt = {
    type: 'list',
    name: 'direction',
    message: 'Choose a direction:',
    choices: ['North', 'South', 'East', 'West'], // Ensure these match your game logic
};

function handleDirectionChoice(playerState, directionChoice) {
    switch (directionChoice.direction) {
        case 'North':
            console.log('You spot a house in the distance...');
            return inquirer.prompt(firstNorth).then(northAnswers => {
                if (northAnswers.enterFirstHouse === 'Yes') {
                    console.log('You cautiously enter the house...');
                    return inquirer.prompt(firstNorthHouse).then(firstNHanswers => {
                        switch (firstNHanswers.firstHouseChoices) {
                            case 'Up':
                                console.log(
                                    `You walk up the steps, holding your ${playerState.weapon}, nearly falling through a broken step. You see a shadowy figure.`
                                );
                                break;
                            case 'Right':
                                console.log(
                                    `You enter the kitchen, gripping your ${playerState.weapon} as rats scatter. The foul air suffocates you.`
                                );
                                break;
                            case 'Left':
                                console.log(
                                    `In the living room, the family rises and overwhelms you. You drop your ${playerState.weapon}. GAME OVER.`
                                );
                                break;
                            default:
                                console.log('Invalid choice.');
                        }
                    });
                } else if (northAnswers.enterFirstHouse === 'No') {
                    console.log('You decide to turn back.');
                    return inquirer.prompt([directionPrompt]).then(newDirectionChoice => {
                        return handleDirectionChoice(playerState, newDirectionChoice);
                    });
                } else {
                    console.log('Invalid Choice')
                }
            });
        case 'South':
            console.log(
                `You head South, gripping your ${playerState.weapon}, and see a figure in the distance.`
            );
            break;
        case 'East':
            console.log(
                `You head East and stumble upon a car crash. Your ${playerState.weapon} is at the ready.`
            );
            break;
        case 'West':
            console.log(
                `You head West toward a road leading to an abandoned town. You prepare your ${playerState.weapon}.`
            );
            break;
        default:
            console.log('You need to choose a valid direction.');
    }
}

inquirer
    .prompt(adventure.slice(0, 1))
    .then(answers => {
        playerState.name = answers['player-name']; // Save player's name
        console.log(`Welcome, ${playerState.name}.`);
        return inquirer.prompt(adventure.slice(1, 2));
    })
    .then(initialWeaponChoice => {
        playerState.weapon = initialWeaponChoice.intialWeapon; // Save weapon choice
        console.log(`You chose the ${playerState.weapon}. Great choice!`);
        return inquirer.prompt(adventure.slice(2));
    })
    .then(initialDirectionChoice => {
        return handleDirectionChoice(playerState, initialDirectionChoice);
    });
