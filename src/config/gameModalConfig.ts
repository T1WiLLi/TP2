// gameModalConfig.ts

interface GameModalConfig {
    [gameId: string]: {
        header1: string;
        text1: string;
        header2: string;
        text2: string;
    };
}

export const GAME_MODAL_CONFIG: GameModalConfig = {
    "1": {
        header1: "First Header",
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        header2: "Second Header",
        text2: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    "2": {
        header1: "Another Header",
        text1: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        header2: "More Headers",
        text2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
};
