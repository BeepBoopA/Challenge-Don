import { REST, Routes } from 'discord.js';
import 'dotenv/config';

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

// Remove commands
(async () => {
    try {
        console.log(`Started removing application (/) commands.`);

        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: [] },
        )

        console.log(`Successfully removed all application (/) commands.`);
    }
    catch (e) {
        console.error(e);
    }
})();