import 'dotenv/config';
import { Client, IntentsBitField } from 'discord.js';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", (message) => {
    const random = Math.random() * 9 + 1;

    if (random >= 9) {
        message.react('735674877243031593');
    }
});