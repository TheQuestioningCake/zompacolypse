import playerState from "./player-state.js";

export function checkVisited(location, area) {
    if (playerState.visitedLocations[location][area]) {
        console.log(chalk.yellow(`You've already viste this ${area}. choose a different location`))
        return true;
    }

    playerState.visitedLocations[location][area] = true;
    return false;
}