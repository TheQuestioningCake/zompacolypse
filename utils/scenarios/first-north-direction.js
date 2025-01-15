import inquirer from 'inquirer';
import chalk from 'chalk';
import { firstNorth, firstNorthHouse, firstNorthHouseUp, firstNorthUpstairs, upstairsTurnBack, firstNorthKitchen, firstShotgun, exitFirstKitchen, exitFirstNorthLivingroom } from './first-north-scenarios.js';
import { directionPrompt } from '../adventure.js';
import playerState from '../player-state.js';
import { checkVisited, appliedDamage, appliedHealing } from '../helper.js';
import {medkit} from '../inventory.js';
import { firstZombieAscii } from '../ascii.js';

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
                    if (checkVisited('house1', 'hasVisitedUpstairs')) return handleHouseChoice();
                    return handleUpstairsChoice();
                    break;
                case 'Left':
                    if (checkVisited('house1', 'hasVisitedKitchen')) return handleHouseChoice();
                    return kitchen()
                    break;
                case 'Right':
                    if (checkVisited('house1', 'hasVisitedLivingroom')) return handleHouseChoice();
                    console.log(chalk.red('In the living room, the family rises and overwhelms you. GAME OVER.'));
                    break;
                default:
                    console.log('Invalid choice.');
            }
        });
}

export function handleUpstairsChoice() {
    console.log(`You walk up the steps gripping your ${playerState.weapon}...`);
    if (playerState.visitedLocations.house1.hasVisitedLivingroom === true) {
        console.log(`Luckily you already took out the zombie upstairs with your ${playerState.weapon}, the barrel still smoking from the fight`);
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
            .then(handleUpstairsChoice2);
    } else {
        console.log(firstZombieAscii)
        return inquirer
            .prompt(firstNorthHouseUp)
            .then(firstNorthUpAnswers => {
                const responses = {
                    Attack: {
                        Pistol: chalk.red.bold('You fire a shot and attract a horde. GAME OVER.'),
                        Knife: 'You rush in with your knife, quickly dealing with the threat.',
                        'Frying pan': () => {
                            appliedDamage()
                            return'You catch the zombie off-guard and smack them with your frying pan.'
                        },
                        'Baseball bat': () => {
                            appliedDamage()
                             return 'You swing your bat and hit a home run.'
                        },
                        Shotgun:`You blast the zombie with your shotgun, you hear a blood curdling scream from behind you. Luckily enough your reflexes were fast to one tap the entire family that lying in the livingroom`
                    },
                    default: chalk.red('You hesitate and fall into a trap. GAME OVER.'),
                };
                const action = firstNorthUpAnswers.firstNorthUp;
                const weapon = playerState.weapon
                const response = responses[action]?.[weapon] || responses.default
                const message = typeof response === 'function' ? response() : response;
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
}

export function handleUpstairsChoice2() {
    return inquirer
        .prompt(upstairsTurnBack)
        .then(upstairsTurnBackAnswers => {
            switch (upstairsTurnBackAnswers.upstairsTurnBack) {
                case 'Exit':
                    console.log('You leave the house')
                    break;
                case 'Left':
                    console.log(chalk.red('Unfortunately your curiousity has led you a stray, the family rises from their slumber and maul you. GAME OVER'))
                    process.exit(0)
                    break;
                case 'Right':
                    return kitchen()
            }
        })
}

export function kitchen() {
    return inquirer
        .prompt(firstNorthKitchen)
        .then(kitchenAnswers => {
            switch (kitchenAnswers.firstNorthKitchen) {
                case 'Yes':
                    console.log(`Who knew you'd be so lucky to find such a coveted weapon this early.`);
                    playerState.inventory.push('Shotgun');
                    console.log(`Current inventory: ${playerState.inventory.join(', ')}`);

                    return inquirer
                        .prompt(firstShotgun)
                        .then(firstShotgunAnswer => {
                            switch (firstShotgunAnswer.firstShotgun) {
                                case 'Yes':
                                    const originalWeapon = playerState.weapon;
                                    playerState.weapon = 'Shotgun';
                                    console.log(`Dropping your ${originalWeapon}, you now brandish a ${playerState.weapon}`);
                                    break;
                                default:
                                    console.log("You decided not to take the shotgun.");
                                    break;
                            }
                        });

                default:
                    console.log("You decided not to enter the kitchen.");
                    break;
            }
        })
        .then(exitKitchen)
}

export function exitKitchen() {
    return inquirer
        .prompt(exitFirstKitchen)
        .then(exitFirstKitchenAnswer => {
            if (exitFirstKitchenAnswer.exitFirstKitchen === 'Livingroom' && playerState.weapon === 'Shotgun' && checkVisited('house1', 'hasVisitedUpstairs')) {
                console.log(`With your ${playerState.weapon} at your hip, you peak into the livingroom. The family now restless slowly rises, but you're quicker. You manage to double tap the family back to sleep.`)
                return handleLivingroomChoice()
            } else if (exitFirstKitchenAnswer.exitFirstKitchen === 'Livingroom' && playerState.weapon === 'Shotgun') {
                checkVisited('house1', 'hasVisitedLivingroom')
                console.log(`With your ${playerState.weapon} at your hip, you peak into the livingroom. The family now restless slowly rises, but you're quicker. You manage to double tap the family back to sleep. You hear a roar come from the stairs and blow the zombie upstairs head off`)
                appliedDamage();
                return handleLivingroomChoice()
            } else if (exitFirstKitchenAnswer.exitFirstKitchen === 'Livingroom') {
                console.log(chalk.red('Unfortunately your curiousity has led you a stray, the family rises from their slumber and maul you. GAME OVER'))
                process.exit(0)
            } else {
                if (checkVisited('house1', 'hasVisitedUpstairs')) return exitKitchen();
                return handleUpstairsChoice()
            }
        })
}

export function handleLivingroomChoice() {
    console.log(`After putting the family back to rest with your ${playerState.weapon} your hands shake as your body quivers. Reality has finally sunk in. It's the apocalypse... You look around the livingroom and spot a medkit.`)
    return handleMedkitChoice2()
    .then(() => {
        return appliedHealing()
    })
    .then(() => {
        handleExitFirstNorthLivingroom()
    })
    .catch(error => {
        console.error('There was an error', error)
    })
}

export function handleExitFirstNorthLivingroom() {
    return inquirer
        .prompt(exitFirstNorthLivingroom)
        .then(exitFirstNorthLivingroomAnswers => {
            if (exitFirstNorthLivingroomAnswers.exitFirstNorthLivingroom === 'Upstairs') {
                return handleUpstairsChoice()
            } else { console.log(`With your ${playerState.weapon} you leave the house and venture off into the apocalypse`) }
        })
}

export function handleMedkitChoice() {
    return inquirer
        .prompt(medkit)
        .then(medkitAnswers => {
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

export function handleMedkitChoice2() {
    return inquirer
        .prompt(medkit)
        .then(medkitAnswers => {
            if (medkitAnswers.medkit === 'Yes') {
                console.log(`You take the medkit, it'll come in handy later. If you make it`);
                playerState.inventory.push('medkit');
                console.log(`Current inventory: ${playerState.inventory.join(', ')}`);
            } else {
                console.log(chalk.yellow(`You sure about that? Just because you have a ${playerState.weapon} doesn't mean you'll survive your next encounter`));
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