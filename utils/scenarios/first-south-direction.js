import inquirer from 'inquirer';
import chalk from 'chalk';
import { directionPrompt } from '../adventure.js';
import playerState from '../player-state.js';
import { checkVisited, appliedDamage, appliedHealing } from '../helper.js';
import { medkit } from '../inventory.js';