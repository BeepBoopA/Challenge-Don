import 'dotenv/config';
import { REST, Routes } from 'discord.js';

const commands = [
    {
        name: 'register',
        description: 'Registers Donder ID with a Discord member',
    },
    {
        name: 'unregister',
        description: 'Unregisters Donder ID with a Discord member'
    },
    {
        name: 'challenge',
        description: 'Views current challenge',
    },
    {
        name: 'leaderboard',
        description: 'Views leaderboard',
    },
];


const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

try {
    console.log('Refreshing Slash Commands');

    await rest.put(Routes.applicationCommands(process.env.APP_ID!), { body: commands });

    console.log('Successfully Reloaded Slash Commands');
    }
catch (e) {
    console.error(e);
}  
