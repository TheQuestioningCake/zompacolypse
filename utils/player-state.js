export const playerState = {
    name: '',
    weapon: '',
    health: 100,
    inventory: [],
    companion:null,
    visitedLocations: {
        house1: {
            hasEntered: false,
            hasVisitedUpstairs: false,
            hasVisitedKitchen: false,
            hasVisitedLivingroom: false
        }
    },
};

export const companionState = {
    name: '',
    weapon: '',
    health: 50
};

export const possibleCompanions = []