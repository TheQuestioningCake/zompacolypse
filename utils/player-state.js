const playerState = {
    name: '',
    weapon: '',
    health: 100,
    inventory: [],
    visitedLocations: {
        house1: {
            hasEntered: false,
            hasVisitedUpstairs: false,
            hasVisitedKitchen: false,
            hasVisitedLivingroom: false
        }
    },
};

export default playerState;