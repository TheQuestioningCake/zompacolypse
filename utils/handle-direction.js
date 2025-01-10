import { handleNorthChoice } from './first-north-direction.js';

export function handleDirectionChoice(playerState, directionChoice) {
    switch (directionChoice.direction) {
        case 'North':
            return handleNorthChoice();
        case 'South':
            console.log(`You head South, gripping your ${playerState.weapon}, and see a figure in the distance.`);
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