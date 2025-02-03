import inquirer from 'inquirer';
import chalk from 'chalk';
import { directionPrompt } from '../adventure.js';
import playerState from '../player-state.js';
import { checkVisited, appliedDamage, appliedHealing } from '../helper.js';
import { medkit } from '../inventory.js';
import { firstSouth, firstSouthEncounter, southConversation } from './first-south-scenarios.js';
import { chooseDirection } from '../handle-direction.js';

export function handleFirstSouth() {
    console.log(`You head South, gripping your ${playerState.weapon}, and see a figure in the distance.`);
    return inquirer
        .prompt(firstSouth)
        .then(firstSouthAnswers => {
            if (firstSouthAnswers.firstSouth === 'Yes') {
                console.log(`You hesitantly approach the figure. Palms sweaty from the death grip you have one your $ `)
                return handleFirstSouthEncounter();
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
            if (firstEncounterAnswers.firstSouthEncounter === 'Yes') {
                console.log(`You tell the man your name is ${playerState.name}`)
                return handleSouthConversation()
            } else {
                console.log(`He looks at you bewildered, you can tell he was just looking for some human decency in this madness`)
            }
        })
}

export function handleSouthConversation() {
    return inquirer
        .prompt(southConversation)
        .then(southConversationsAnswers => {
            if (southConversationsAnswers.southConversation === 'Yes') {
                if (playerState.visitedLocations.house1.hasVisitedKitchen === true  && playerState.weapon === 'Shotgun') {
                    console.log (`The man looks over at your ${playerState.weapon}. "That shotgun!? Where did you get it? That's the shotgun I left in my family's house. Are they still alive? Please tell me they're still alive"`)
                } else {
                    console.log(`You lay down next to the man, and tell him he's going to be alright. He looks at you with admiration. He begins to calm down and begins to tell you about his family. They live at the house up north, and how he was too shaken by the zombies over taking his home. He could've saved his family but couldn't reach the shotgun in the kitchen.`)
                }
            } else if (southConversationsAnswers.southConversation === 'No') {
                if (playerState.weapon === 'Knife') {
                    console.log(`The man notices your ${playerState.weapon}, rushes for it and stabs himself in the throat. He coulnd't bare his sins anymore`)
                } else if (playerState.weapon === 'Pistol') {
                    console.log(`The man notices your ${playerState.weapon}, rushes for it and shoots himself. He couldn't bare his sins any longer. The sound from pistol alerts a nearby horde.`)
                    console.log(chalk.red.bold('Game Over'))
                    process.exit(0)
                } else {
                    console.log(`The man tells you to leave. He already can't bear the guilt he doesn't need some random named ${playerState.name} pity either.`)
                }
            }
        })
}