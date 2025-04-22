import playerState from "./player-state.js";
import chalk from 'chalk'
import inquirer from "inquirer";
import { useMedkit } from './inventory.js'

export function checkVisited(location, area) {
    if (!playerState.visitedLocations[location]) {
        playerState.visitedLocations[location] = {};
    } else if (playerState.visitedLocations[location][area]) {
        console.log(chalk.yellow(`You've already visited this ${area}. Choose a different location.`));
        return true;
    } else {
        playerState.visitedLocations[location][area] = true;
        return false;
    }
}

export function appliedDamage() {
    const dmgValues = [1, 3, 5]
    const randomIndex = Math.floor(Math.random() * dmgValues.length);
    const damage = dmgValues[randomIndex];
    playerState.health -= damage;
    console.log(`You took ${damage}, your current health is ${playerState.health}`)

    if (playerState.health <= 0) {
        console.log(chalk.red(`GAME OVER!!!!!`))
        process.exit(0)
    }
}

export function appliedHealing() {
    if (playerState.inventory.includes('medkit')) {
        return inquirer
            .prompt(useMedkit)
            .then(useMedkitAnswers => {
                if (useMedkitAnswers.useMedkit === 'Yes') {
                    const healingValues = [2, 3, 4, 5];
                    const randomIndex = Math.floor(Math.random() * healingValues.length);
                    const healing = healingValues[randomIndex];
                    const maxHealth = 100;
                    playerState.health = Math.min(playerState.health + healing, maxHealth);

                    const medkitIndex = playerState.inventory.indexOf('medkit');
                    if (medkitIndex > -1) {
                        playerState.inventory.splice(medkitIndex, 1);
                    }

                    console.log(
                        `You healed for ${healing} pts of health. Your current health is ${playerState.health}.`
                    );

                    console.log(`Remaining inventory: ${playerState.inventory.join(', ')}`);

                } else {
                    console.log('You decided not to use the medkit right now.');
                }
            });
    } else {
        console.log('You do not have a medkit to use.');
    }
}

export function addCompanion() {
    return inquirer
        .prompt(companionPrompt)
        .then(companionPromptAnswers => {
            if (companionPromptAnswers.companionPrompt === 'Yes') {
                // Ensure the companion list exists
                if (!Array.isArray(playerState.companion)) {
                    playerState.companion = [];
                }

                // Prevent adding the same companion twice
                if (!playerState.companion.includes(companionState.name)) {
                    playerState.companion.push(companionState.name);
                    console.log(`${companionState.name} has joined your party!`);
                } else {
                    console.log(`${companionState.name} is already in your party.`);
                }
            } else {
                console.log('You decided not to add a companion right now.');
            }
        });
}