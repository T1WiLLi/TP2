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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis rhoncus nibh. Phasellus dignissim luctus consectetur. Fusce viverra est non purus ultrices, vel molestie massa tincidunt.",
        scores: [8.0, 7.3, 86]
    },
    "2": {
        image: "ac_valhalla.jpeg",
        name: 'Assassin\'s Creed Valhalla',
        tags: "Action RPG | PC, PS5, XBOX S|X",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis rhoncus nibh. Phasellus dignissim luctus consectetur. Fusce viverra est non purus ultrices, vel molestie massa tincidunt.",
        scores: [7.9, 7.4, 64]
    },
    "3": {
        image: "ac_odyssey.jpg",
        name: 'Assassin\'s Creed Odyssey',
        tags: "Action-Adventure | PC, PS4, XBOX ONE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis rhoncus nibh. Phasellus dignissim luctus consectetur. Fusce viverra est non purus ultrices, vel molestie massa tincidunt.",
        scores: [8.4, 8.7, 92]
    },
    "4": {
        image: "ac_origin.jpg",
        name: 'Assassin\'s Creed Origins',
        tags: "First-Person Shooter | PC, PS4, XBOX ONE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis rhoncus nibh. Phasellus dignissim luctus consectetur. Fusce viverra est non purus ultrices, vel molestie massa tincidunt.",
        scores: [8.2, 7.5, 85]
    }
};