import 'dotenv/config';
import { Client, IntentsBitField } from 'discord.js';
import { commands } from './components/commandInteraction';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});


client.login(process.env.DISCORD_TOKEN);

commands(client);


// Random :sad:
// client.on('messageCreate', (message) => {
//     const random = Math.random() * 9 + 1;

//     if (random >= 9) {
//         message.react('735674877243031593');
//     }
// });