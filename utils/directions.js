import inquirer from 'inquirer';
import chalk from 'chalk';
import { firstNorth, firstNorthHouse, firstNorthHouseUp, firstNorthUpstairs, upstairsTurnBack } from './first-north-scenarios.js';
import { directionPrompt } from './adventure.js';
import playerState from './player-state.js';
import medkit from './inventory.js';

export function handleNorthChoice() {
    console.log('You spot a house in the distance...');
    return inquirer
        .prompt(firstNorth)
        .then(northAnswers => {
            if (northAnswers.enterFirstHouse === 'Yes') {
                console.log('You cautiously enter the house...');
                return handleHouseChoice();
            } else {
                console.log('You decide to turn back.');
                return inquirer.prompt([directionPrompt]).then(newDirectionChoice => {
                    return handleDirectionChoice(newDirectionChoice);
                });
            }
        });
}

export function handleHouseChoice() {
    return inquirer
        .prompt(firstNorthHouse)
        .then(firstNHanswers => {
            switch (firstNHanswers.firstHouseChoices) {
                case 'Up':
                    return handleUpstairsChoice();
                case 'Right':
                    console.log(`You enter the kitchen, gripping your ${playerState.weapon} as rats scatter.`);
                    break;
                case 'Left':
                    console.log('In the living room, the family rises and overwhelms you. GAME OVER.');
                    break;
                default:
                    console.log('Invalid choice.');
            }
        });
}

export function handleUpstairsChoice() {
    console.log('You walk up the steps...');
    return inquirer
        .prompt(firstNorthHouseUp)
        .then(firstNorthUpAnswers => {
            const responses = {
                Attack: {
                    Pistol: chalk.red.bold('You fire a shot and attract a horde. GAME OVER.'),
                    Knife: 'You rush in with your knife, quickly dealing with the threat.',
                    FryingPan: 'You catch the zombie off-guard and smack them with your frying pan.',
                    BaseballBat: 'You swing your bat and hit a home run.',
                },
                default: 'You hesitate and fall into a trap. GAME OVER.',
            };
            const action = firstNorthUpAnswers.firstNorthUp;
            const weapon = playerState.weapon
            const message = responses[action]?.[weapon] || responses.default
            console.log(message);

            if (message.includes('GAME OVER')) {
                process.exit(0)
            };

            return inquirer
                .prompt(firstNorthUpstairs)
                .then(firstNorthUpstairsAnswers => {
                    switch (firstNorthUpstairsAnswers.firstNorthUpstairs) {
                        case 'First bedroom':
                            console.log(chalk.red.bold('You crash through the floor and meet your demise.'));
                            process.exit(0);
                            break;
                        case 'Second bedroom':
                            return handleMedkitChoice();
                    }
                });
        });
}

export function handleMedkitChoice() {
    console.log('You spot a medkit. Do you take it?');
    return inquirer
        .prompt(medkit)
        .then(medkitAnswers => {
            if (medkitAnswers.medkit === 'Yes') {
                console.log('You take the medkit. It might be useful later.');
                playerState.inventory.push('medkit');
            } else {
                console.log(chalk.yellow('You might regret not taking it.'));
            }
            console.log(`Current inventory: ${playerState.inventory}`);
        });
}
