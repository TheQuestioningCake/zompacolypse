import inquirer from 'inquirer';
import chalk from 'chalk';
import { firstNorth, firstNorthHouse, firstNorthHouseUp, firstNorthUpstairs, upstairsTurnBack } from './first-north-scenarios.js';
import { directionPrompt } from './adventure.js';
import playerState from './player-state.js';
import medkit from './inventory.js';
import { firstZombieAscii } from './ascii.js';

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
                    console.log(chalk.red('In the living room, the family rises and overwhelms you. GAME OVER.'));
                    break;
                default:
                    console.log('Invalid choice.');
            }
        });
}

export function handleUpstairsChoice() {
    console.log(`You walk up the steps gripping your ${playerState.weapon}...`);
    console.log(firstZombieAscii)
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
                            console.log('You walk into a rundown bedroom with a red medkit')
                            return handleMedkitChoice();
                    }
                })
                .then(handleUpstairsChoice2)
        });
}

export function handleUpstairsChoice2 () {
    return inquirer
            .prompt(upstairsTurnBack)
            .then(upstairsTurnBackAnswers => {
                switch(upstairsTurnBackAnswers.upstairsTurnBack) {
                    case 'Exit':
                        console.log('You leave the house')
                        break;
                    case 'Left':
                        console.log(chalk.red('Unfortunately your curiousity has led you a stray, the family rises from their slumber and maul you. GAME OVER'))
                        process.exit(0)
                        break;
                    case 'Right':
                        console.log(`Grippping your ${playerState.weapon}, you cautiously walk into the kitchen. As you enter rats scatter in every direction.`)
                }
            })
}

export function Kitchen() {

}

export function handleMedkitChoice() {
    return inquirer.prompt(medkit).then(medkitAnswers => {
        if (medkitAnswers.medkit === 'Yes') {
            console.log(`You take the medkit, it'll come in handy later. If you make it`);
            playerState.inventory.push('medkit');
            console.log(`Current inventory: ${playerState.inventory.join(', ')}`);
        } else {
            console.log(chalk.yellow(`You sure about that? Just because you survived your first encounter doesn't mean you'll survive the next`));
            return inquirer.prompt(medkit).then(medkitAnswer2 => {
                if (medkitAnswer2.medkit === 'Yes') {
                    console.log('See, maybe you do have some survival instinct. Just needed to be warned.');
                    playerState.inventory.push('medkit');
                    console.log(`Current inventory: ${playerState.inventory.join(', ')}`);
                } else {
                    console.log(chalk.red.bold(`Alright, it's your funeral`));
                }
            });
        }
    });
}
