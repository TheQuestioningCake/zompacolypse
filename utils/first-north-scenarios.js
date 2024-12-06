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

export { firstNorth, firstNorthHouse, firstNorthHouseUp}