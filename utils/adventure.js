export const adventure = [
    {
        type: 'input',
        name: 'player-name',
        message: 'What is your name?',
        validate: function (input) {
            if (input.trim() === '') {
                return 'Please enter a name for your character';
            }
            return true;
        },
    },
    {
        type: 'list',
        name: 'intialWeapon',
        message: 'Choose your weapon?',
        choices: ['Knife', 'Frying pan', 'Baseball bat', 'Pistol'],
    },
    {
        type: 'list',
        name: 'direction',
        message: 'Choose a direction',
        choices: ['North', 'South', 'East', 'West'],
    },
];

export const directionPrompt = {
    type: 'list',
    name: 'direction',
    message: 'Choose a direction:',
    choices: ['North', 'South', 'East', 'West']
};

