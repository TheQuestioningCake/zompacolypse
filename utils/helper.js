import playerState from "./player-state.js";
import chalk from 'chalk'

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