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
            "There's a rotten smell in the air. You see a decrpyted set of stairs, a rundown kitchen, and a living room with what appears to be the remains of the family living there. Where do you go?",
        choices: ['Up', 'Right', 'Left'],
    },
];

const firstNorthHouseUp= [
    {
        type: 'list',
        name: 'firstNorthUp',
        message: `As you approach the shadowy figure, a rotten smell infiltrates your nose. The figure approaches closer, its crippling moan sending a shiver down your spine. Your first zombie. What do you do?`,
        choices: ['Attack', 'Run']
    }
];

const directionPrompt = {
    type: 'list',
    name: 'direction',
    message: 'Choose a direction:',
    choices: ['North', 'South', 'East', 'West']
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
                                return inquirer.prompt(firstNorthHouseUp)
                                .then(firstNorthUpAnswers => {
                                    return inquirer.prompt(firstNorthHouseUp).then(firstNorthUpAnswers => {
                                        const responses = {
                                            Attack: {
                                                Pistol: `You release the first bullet in the chamber of your ${playerState.weapon}. The shot echoes throughout the house, calling the residents to your location. You hesitate due to fear. Your first horde, and your last. GAME OVER`,
                                                Knife: `You quickly rush the zombie with your ${playerState.weapon}, like an assassin following his creed. You may be a natural.`,
                                                'Frying pan': `Luckily enough the zombie didn't notice at first but with your ${playerState.weapon}, you were able to serve up some smooth home cooking.`,
                                                'Baseball bat': `Dun dun dun dun, do da do. You swing with your ${playerState.weapon}. Who knew you'd be able to hit a homerun during the apocalypse.`,
                                            },
                                            default: 'Guess you have no real survival instincts, you nearly fell through a broken stair. Why would you run down them? GAME OVER!',
                                        };
                                    
                                        const action = firstNorthUpAnswers.firstNorthUp;
                                        const weapon = playerState.weapon;
                                    
                                        console.log(responses[action]?.[weapon] || responses.default);
                                    });
                                    
                                });
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
        playerState.name = answers['player-name'];
        console.log(`Welcome, ${playerState.name}.`);
        return inquirer.prompt(adventure.slice(1, 2));
    })
    .then(initialWeaponChoice => {
        playerState.weapon = initialWeaponChoice.intialWeapon; 
        
        switch (playerState.weapon) {
            case 'Knife':
                console.log('Sharp thinking kid');
                break;
            case 'Frying pan':
                console.log('Someone plays a little too much PUBG');
                break;
            case 'Baseball bat':
                console.log("BATTER UP!! Just don't let it be a swing and a miss");
                break;
            case 'Pistol':
                console.log("Hope you don't attract a horde with that");
                break;
            default:
                console.log('An unconventional choice, huh?');
                break;
        }
        return inquirer.prompt(adventure.slice(2));
    })
    .then(initialDirectionChoice => {
        return handleDirectionChoice(playerState, initialDirectionChoice);
    });
