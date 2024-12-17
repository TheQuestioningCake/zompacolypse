import inquirer from 'inquirer';
import chalk from 'chalk';
import playerState from './utils/player-state.js';
import { adventure, directionPrompt } from './utils/adventure.js';
import { handleDirectionChoice } from './utils/handle-direction.js';
import {ascii, zombieAscii} from './utils/ascii.js'

inquirer
    .prompt(adventure.slice(0, 1))
    .then(answers => {
        playerState.name = answers['player-name'];
        console.log(chalk.red.bold(ascii))
        console.log(chalk.red(zombieAscii))
        console.log(`Welcome, to your death ${playerState.name}.`);
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

