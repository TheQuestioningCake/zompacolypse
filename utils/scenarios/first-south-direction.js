import inquirer from 'inquirer';
import chalk from 'chalk';
import { directionPrompt } from '../adventure.js';
import playerState from '../player-state.js';
import { checkVisited, appliedDamage, appliedHealing } from '../helper.js';
import { medkit } from '../inventory.js';
import { firstSouth } from './first-south-scenarios.js';
import { handleDirectionChoice } from '../handle-direction.js';
import { chooseDirection } from '../handle-direction.js';

export function handleFirstSouth() {
    console.log(`You head South, gripping your ${playerState.weapon}, and see a figure in the distance.`);
    return inquirer
        .prompt(firstSouth)
        .then(firstSouthAnswers => {
            if (firstSouthAnswers.firstSouth === 'Yes') {
                console.log(`You hesitantly approach the figure. Palms sweaty from the death grip you have one your $ `)
            } else {
                console.log('You decide to turn back.');
                return chooseDirection();
                // return inquirer.prompt([directionPrompt]).then(newDirectionChoice => {
                //     return handleDirectionChoice(newDirectionChoice);
                // });
            }
        })
}