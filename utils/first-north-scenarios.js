import playerState from "./player-state.js";

const firstNorth = [
    {
        type: 'list',
        name: 'enterFirstHouse',
        message: "You've walked up to a decrepit house. Do you enter?",
        choices: ['Yes', 'No'],
    },
];

const firstNorthHouse = [
    {
        type: 'list',
        name: 'firstHouseChoices',
        message:
            "There's a rotten smell in the air. You see a decrpyted set of stairs, a rundown kitchen, and a living room with what appears to be the remains of the family living there. Where do you go?",
        choices: ['Up', 'Right', 'Left'],
    },
];

const firstNorthHouseUp= [
    {
        type: 'list',
        name: 'firstNorthUp',
        message: `As you approach the shadowy figure, a rotten smell infiltrates your nose. The figure approaches closer, its crippling moan sending a shiver down your spine. Your first zombie. What do you do?`,
        choices: ['Attack', 'Run']
    }
];

const firstNorthUpstairs = [
    {
        type: 'list',
        name: 'firstNorthUpstairs',
        message: `After your first encounter with a zombie, you hold your chest questioning if you'll ever be able to survive this new world. Gripping your ${playerState.weapon} you look around. You see two bedrooms, one has the roof crashing through it, and the other surprisingly not as rundown as the rest of the house. What do you do?`,
        choices:['First bedroom', 'Second bedroom', 'Turn back' ]
    }
]

const upstairsTurnBack = [
    {
        type: 'list',
        name: 'upstairsTurnBack',
        message: 'As you leave the first floor, you carefully go back down the stairs avoiding the broken step, before you lies the door, to your right lies the living room, and to your left the kitchen. Which way do you go?',
        choices: ['Exit', 'Left', 'Right']
    }
]

const firstNorthKitchen = [
    {
        type: 'list',
        name: 'firstNorthKitchen',
        message: `After the flurry of rats has dispersed you see a shotgun. Its eerie sight, makes you wonder if it was meant for the family in the livingroom. Do you take it?`,
        choices: ['Yes', 'No']
    }
]

const firstShotgun = [
    {
        type: 'list',
        name: 'firstShotgun',
        message: 'Do you want to equip it?',
        choices: ['Yes', 'No']
    }
]

const exitFirstKitchen = [
    {
        type: 'list',
        name: 'exitFirstKitchen',
        message: `With your ${playerState.weapon} to your chest, you peak out and in front of you lies the livingroom, and to your left the stairs. What do you do?`,
        choices: ['Stairs', 'Livingroom']
    }
]

export { firstNorth, firstNorthHouse, firstNorthHouseUp, firstNorthUpstairs, upstairsTurnBack, firstNorthKitchen, firstShotgun, exitFirstKitchen}