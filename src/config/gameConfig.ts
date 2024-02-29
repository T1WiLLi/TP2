interface config {
    [gameNum: string]: {
        image: string;
        name: string;
        tags: string;
        description: string;
        scores: [number, number, number];
    };
}

export const GAME_CONFIG: config = {
    "1": {
        image: "ac_mirage.webp",
        name: 'Assassin\'s Creed Mirage',
        tags: "Action RPG | PC, PS5, XBOX S|X",
        description: "Embark on a journey through ancient Egypt as a young assassin uncovering the secrets of a lost civilization.",
        scores: [8.0, 7.3, 86]
    },
    "2": {
        image: "ac_valhalla.jpeg",
        name: 'Assassin\'s Creed Valhalla',
        tags: "Action RPG | PC, PS5, XBOX S|X",
        description: "Lead your Viking clan to glory in England, raiding settlements and forging alliances in a brutal world.",
        scores: [7.9, 7.4, 64]
    },
    "3": {
        image: "ac_odyssey.jpg",
        name: 'Assassin\'s Creed Odyssey',
        tags: "Action-Adventure RPG | PC, PS4, XBOX ONE",
        description: "Shape the fate of ancient Greece as a legendary Spartan hero in this epic open-world adventure.",
        scores: [8.4, 8.7, 92]
    },
    "4": {
        image: "ac_origin.jpg",
        name: 'Assassin\'s Creed Origins',
        tags: "Action RPG | PC, PS4, XBOX ONE",
        description: "Uncover the origins of the Assassin Brotherhood in ancient Egypt, battling gods and uncovering lost tombs.",
        scores: [8.2, 7.5, 85]
    },
    "5": {
        image: "ac_blackflag.webp",
        name: 'Assassin\'s Creed Black Flag',
        tags: "Action-Adventure | PC, PS4, XBOX ONE / 360",
        description: "Experience the golden age of piracy as Edward Kenway, plundering the Caribbean and engaging in epic naval battles.",
        scores: [10.0, 10.0, 100]
    }
};

