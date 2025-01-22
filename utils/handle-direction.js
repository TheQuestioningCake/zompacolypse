import { handleNorthChoice } from './scenarios/first-north-direction.js';
import { handleFirstSouth } from './scenarios/first-south-direction.js';
import inquirer from 'inquirer';
import { directionPrompt } from './adventure.js';

export function handleDirectionChoice(playerState, directionChoice) {
    if (!directionChoice || !directionChoice.direction) {
        console.error('Invalid direction choice!');
        return;
    }

    switch (directionChoice.direction) {
        case 'North':
            return handleNorthChoice();
            break;
        case 'South':
            return handleFirstSouth();
            break;
        case 'East':
            console.log(`You head East and stumble upon a car crash. Your ${playerState.weapon} is at the ready.`);
            break;
        case 'West':
            console.log(`You head West toward a road leading to an abandoned town.`);
            break;
        default:
            console.log('You need to choose a valid direction.');
    }
}

export function chooseDirection(playerState) {
    return inquirer
        .prompt([directionPrompt])
        .then(newDirectionChoice => {
            
            console.log("Prompt output:", newDirectionChoice);

            return handleDirectionChoice(playerState, newDirectionChoice);
        });
}