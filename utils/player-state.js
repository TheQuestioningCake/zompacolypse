const playerState = {
    name: '',
    weapon: '',
    health: 100,
    inventory: [],
    vistedLocations: {
        house1: {
            hasEntered: false,
            hasVisitedUpstairs: false,
            hasVistedKitchen: false,
            hasVistedLivingroom: false
        }
    },
};

export default playerState;