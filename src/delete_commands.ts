import 'dotenv/config';
import { REST, Routes } from 'discord.js';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

//  THIS DELETES GLOBAL COMMANDS BECAUSED I MESSED UP RAHHH

(async () => {
    try {
        console.log('Deleting Slash Commands');

        await rest.put(Routes.applicationCommands(process.env.APP_ID!), { body: [] });

	    console.log('Successfully deleted all slash commands.');
    }
    catch (e) {
        console.log(`ERROR ${e}`);
    }
});