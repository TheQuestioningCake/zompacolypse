const playerState = {
    name: '',
    weapon: '',
    health: 100,
    inventory: [],
    companion:'',
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