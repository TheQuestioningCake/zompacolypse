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

export function appliedDamage(playerDamage) {
    const dmgValues = [1,3,5]
    for (let dmg = 0; dmg < playerDamage; dmg++) {
        const randomIndex = Math.floor(Math.random() * dmgValues.length);
        const damage = dmgValues[randomIndex];
        playerState.health -= damage;
        console.log(`You took ${damage}, your current health is ${playerState.health}`)

        if (playerState.health <= 0) {
            console.log(chalk.red(`GAME OVER!!!!!`))
            process.exit(0)
        }

    }
    
}