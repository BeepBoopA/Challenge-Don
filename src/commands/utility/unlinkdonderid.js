import { SlashCommandBuilder } from 'discord.js';
import { unlinkDonderToDiscord } from '../../modules/linkDonderDiscord.js';

export default {
    data: new SlashCommandBuilder()
<<<<<<< HEAD
        .setName('unlink-donder-id')
        .setDescription('unlinks donder id to discord user'),
=======
        .setName('link-donder-id')
        .setDescription('links donder id to discord user'),
>>>>>>> e457b5c2aa938b7bb15955ce1c6a54cd5d2c9d7d
    async execute(interaction) {
        const userID = interaction.user.id;

        await interaction.reply(`Linking Donder: ${userID}`);
        unlinkDonderToDiscord(userID);
    },
};