const playerState = {
    name: '',
    weapon: '',
    health: 100,
    inventory: [],
    visitedLocations: {
        house1: {
            hasEntered: false,
            hasVisitedUpstairs: false,
            hasVistedKitchen: false,
            hasVistedLivingroom: false
        }
    },
};

export default playerState;