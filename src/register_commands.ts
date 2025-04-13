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
        ],
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
