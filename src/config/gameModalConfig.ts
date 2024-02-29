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
        header1: "The Ancient Desert",
        text1: "Embark on a perilous journey through the scorching sands of the ancient desert. As a daring adventurer, you'll navigate treacherous terrain, confront fearsome creatures, and uncover the secrets of a lost civilization. Along the way, you'll encounter ancient ruins, mystical artifacts, and enigmatic hieroglyphs, each holding clues to the Mirage, a legendary artifact said to grant untold power to those who possess it.",
        header2: "Unravel Mysteries",
        text2: "Delve deep into the heart of the desert to unravel the mysteries of the Mirage. As you explore hidden tombs and forgotten temples, you'll decipher ancient puzzles, decipher cryptic inscriptions, and unlock the secrets of a bygone era. But beware, for you are not alone in your quest. Dark forces seek to claim the Mirage for themselves, and only by mastering the art of deception and cunning will you emerge victorious.",
    },
    "2": {
        header1: "Norse Mythology",
        text1: "Step into the shoes of a legendary Viking warrior and embark on an epic journey through the realms of Norse mythology. From the frozen tundras of Scandinavia to the towering peaks of Asgard, you'll traverse a world steeped in legend and lore. As the chosen champion of your clan, you'll wage war against rival factions, forge alliances with gods and monsters, and carve out your place in the annals of history.",
        header2: "Viking Saga",
        text2: "Experience the rich tapestry of Viking culture as you lead your people on a quest for glory and conquest. Raid enemy settlements, pillage merchant ships, and plunder ancient treasure hoards as you build your legend as a fearless warrior and cunning strategist. But be warned, the path to Valhalla is fraught with peril, and only the strongest and most cunning warriors will earn their place among the gods.",
    },
    "3": {
        header1: "Ancient Greece Awaits",
        text1: "Journey back to the golden age of ancient Greece and experience the epic tales of gods and heroes come to life. From the marble halls of Athens to the sun-drenched shores of the Aegean Sea, you'll explore a world brimming with myth and legend. As a legendary hero of Greek lore, you'll embark on a quest to defy fate, challenge the gods, and shape the destiny of empires.",
        header2: "Hero's Odyssey",
        text2: "Experience the thrill of an epic odyssey as you chart your course through the sprawling landscapes of ancient Greece. From the heights of Mount Olympus to the depths of the underworld, you'll face trials and tribulations beyond imagination. Encounter legendary figures like Zeus, Athena, and Hercules as you unravel the mysteries of the past and forge your own destiny as a hero for the ages.",
    },
    "4": {
        header1: "Birth of the Brotherhood",
        text1: "Journey to the sands of ancient Egypt and witness the birth of the Assassin Brotherhood. As the last of the Medjay, Bayek of Siwa, you'll embark on a quest for vengeance against those who threaten your homeland. Along the way, you'll uncover a conspiracy that spans centuries, unraveling the mysteries of the ancient world and laying the foundation for the Brotherhood's legacy.",
        header2: "Explore Ancient Egypt",
        text2: "Experience the majesty of ancient Egypt as you explore its vast and varied landscapes. From the bustling streets of Alexandria to the sun-baked deserts of the Sinai Peninsula, you'll encounter a rich tapestry of cultures, peoples, and landmarks. Sail the Nile, climb the pyramids, and uncover hidden tombs as you uncover the secrets of this ancient civilization.",
    },
    "5": {
        header1: "Pirate's Life",
        text1: "Hoist the black flag and set sail for adventure in the Caribbean. As a notorious pirate captain, you'll plunder the high seas, engage in epic naval battles, and build your own pirate empire. From the bustling ports of Nassau to the sun-drenched beaches of Havana, you'll explore a world teeming with danger and opportunity.",
        header2: "Legend of the Black Flag",
        text2: "Experience the thrill of the golden age of piracy as you live the life of a swashbuckling buccaneer. Engage in daring raids, uncover hidden treasures, and face off against rival pirates and naval powers. But beware, for the Caribbean is a lawless land where only the strongest and most cunning can rise to the top.",
    },
};
