import playerState from "../player-state.js";

export const firstSouth = [
    {
        type: 'list',
        name: 'firstSouth',
        message: 'Do you approach the figure?',
        choices: ['Yes', 'No']
    }
]

export const firstSouthEncounter = [
    {
        type: 'list',
        name: 'firstSouthEncounter',
        message:`In front of you is a disheveled man. He's breaking down, crying... Then he looks up to you. He ask who you are. Do you tell him your name?`,
        choices: ['Yes', 'No']
    }
]