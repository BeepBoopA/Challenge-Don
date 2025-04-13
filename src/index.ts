import 'dotenv/config';
import { Client, GatewayIntentBits, GuildEmoji } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", (message) => {
    const random = Math.random() * 9 + 1;

    if (random >= 9) {
        message.react('735674877243031593');
    }
});