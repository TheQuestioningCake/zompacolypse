import playerState from "./player-state.js";

export const firstNorth = [
    {
        type: 'list',
        name: 'enterFirstHouse',
        message: "You've walked up to a decrepit house. Do you enter?",
        choices: ['Yes', 'No'],
    },
];

export const firstNorthHouse = [
    {
        type: 'list',
        name: 'firstHouseChoices',
        message:
            "There's a rotten smell in the air. You see a decrpyted set of stairs, to the left a rundown kitchen, and a living room with what appears to be the remains of the family living there to your right. Where do you go?",
        choices: ['Up', 'Right', 'Left'],
    },
];

export const firstNorthHouseUp= [
    {
        type: 'list',
        name: 'firstNorthUp',
        message: `As you approach the shadowy figure, a rotten smell infiltrates your nose. The figure approaches closer, its crippling moan sending a shiver down your spine. Your first zombie. What do you do?`,
        choices: ['Attack', 'Run']
    }
];

export const firstNorthUpstairs = [
    {
        type: 'list',
        name: 'firstNorthUpstairs',
        message: `After your first encounter with a zombie, you hold your chest questioning if you'll ever be able to survive this new world. Gripping your ${playerState.weapon} you look around. You see two bedrooms, one has the roof crashing through it, and the other surprisingly not as rundown as the rest of the house. What do you do?`,
        choices:['First bedroom', 'Second bedroom', 'Turn back' ]
    }
]

export const upstairsTurnBack = [
    {
        type: 'list',
        name: 'upstairsTurnBack',
        message: 'As you leave the first floor, you carefully go back down the stairs avoiding the broken step, before you lies the door, to your left lies the living room, and to your right the kitchen. Which way do you go?',
        choices: ['Exit', 'Left', 'Right']
    }
]

export const firstNorthKitchen = [
    {
        type: 'list',
        name: 'firstNorthKitchen',
        message: `After the flurry of rats has dispersed you see a shotgun. Its eerie sight, makes you wonder if it was meant for the family in the livingroom. Do you take it?`,
        choices: ['Yes', 'No']
    }
]

export const firstShotgun = [
    {
        type: 'list',
        name: 'firstShotgun',
        message: 'Do you want to equip it?',
        choices: ['Yes', 'No']
    }
]

export const exitFirstKitchen = [
    {
        type: 'list',
        name: 'exitFirstKitchen',
        message: `With your ${playerState.weapon} to your chest, you peak out and in front of you lies the livingroom, and to your left the stairs. What do you do?`,
        choices: ['Stairs', 'Livingroom']
    }
]

export const firstNorthLivingroom = [
    {
        type: 'list',
        name: 'firstNorthLivingroom',
        message:`After putting the family back to rest with your ${playerState.weapon} your hands shake as your body quivers. Reality has finally sunk in. It's the apocalypse... You look around the livingroom and spot a medkit. Do you take it? `,
        choices: ['Yes', 'No']
    }
]

export const exitFirstNorthLivingroom = [
    {
        type: 'list',
        name: 'exitFirstNorthLivingroom',
        message: 'After collecting yourself and coming to turns with your new reality, you walk out the livingroom ready to take the world on. What do you do?',
        choices: ['Upstairs', 'Exit']
    }
]

