export interface News {
    title: string;
    date: Date;
    desc: string;
}

export const news: News[] = [
    {
        title: "Inspiring Inclusion on International Women's Day",
        date: new Date('2024-03-13'),
        desc: "Four women at WeSoftQc share what this year's theme, \"Inspire Inclusion,\" means to them, and offer advice to the next generation of women in games."
    },
    {
        title: "WeSoftQc+ Classics Now Available for Standalone Purchase on PlayStation",
        date: new Date('2024-03-07'),
        desc: "Subscribe today for access to Assassin's creed franchise game and exclusive content."
    },
    {
        title: "WeSoftQc Store Offers Big Discounts for Black Friday Sale",
        date: new Date('2023-11-16'),
        desc: "From ninth-century baghdad to present-day O'ahu, here are the best deals and rewards for the WeSoftQc Store's Black Friday sale."
    }
];
