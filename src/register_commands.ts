import 'dotenv/config';
import { REST, Routes, ApplicationCommandOptionType } from 'discord.js';

const commands = [
    {
        name: 'register',
        description: 'Registers Donder ID with a Discord member',
        options: [
            {
                name: 'donder-id',
                description: 'Found in donder hiroba',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ]
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
    {
        name: 'setchallenge',
        description: 'set 3 charts for this seasons challenge',
        options: [
            {
                name: 'chart-1',
                description: 'select 1st chart for challenge',
                type: ApplicationCommandOptionType.String, // type: API to inaya's database, maybe interface / type called 'charts' of something
                requiired: true,
            },
            {
                name: 'chart-2',
                description: 'select 2nd chart for challenge',
                type: ApplicationCommandOptionType.String, // type: API to inaya's database, maybe interface / type called 'charts' of something
                requiired: true,
            },
            {
                name: 'chart-3',
                description: 'select 3rd chart for challenge',
                type: ApplicationCommandOptionType.String, // type: API to inaya's database, maybe interface / type called 'charts' of something
                requiired: true,
            },
        ]
    }
];


const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

(async () => {
    try {
        console.log('Refreshing Slash Commands');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.APP_ID!,
                process.env.GUILD_ID!,
            ), 
            { body: commands }
        );

        console.log('Successfully Reloaded Slash Commands');
    }
    catch (e) {
        console.log(`ERROR: ${e}`);
    }  
})();
