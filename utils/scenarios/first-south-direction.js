import inquirer from 'inquirer';
import chalk from 'chalk';
import { directionPrompt } from '../adventure.js';
import playerState from '../player-state.js';
import { checkVisited, appliedDamage, appliedHealing } from '../helper.js';
import { medkit } from '../inventory.js';
import { firstSouth, firstSouthEncounter } from './first-south-scenarios.js';
import { chooseDirection } from '../handle-direction.js';

export function handleFirstSouth() {
    console.log(`You head South, gripping your ${playerState.weapon}, and see a figure in the distance.`);
    return inquirer
        .prompt(firstSouth)
        .then(firstSouthAnswers => {
            if (firstSouthAnswers.firstSouth === 'Yes') {
                console.log(`You hesitantly approach the figure. Palms sweaty from the death grip you have one your $ `)
                return handleFirstSouthEncounter()
            } else {
                console.log('You decide to turn back.');
                return chooseDirection();
            }
        })
}

export function handleFirstSouthEncounter() {
    return inquirer
        .prompt(firstSouthEncounter)
        .then(firstEncounterAnswers => {
            if(firstEncounterAnswers.firstSouthEncounter === 'Yes') {
                console.log(`You tell the man your name is ${playerState.name}`)
            } else {
                console.log(`He looks at you bewildered, you can tell he was just looking for some human decency in this madness`)
            }
        })
}