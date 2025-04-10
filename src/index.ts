import 'dotenv/config';
import { Client } from 'discord.js';

const client = new Client({
    intents: [
        'Guilds',
        'GuildMessages'
    ],
});

client.login(process.env.DISCORD_TOKEN);

