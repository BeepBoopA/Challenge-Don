import { SlashCommandBuilder } from 'discord.js';
import { unlinkDonderToDiscord } from '../../modules/linkDonderDiscord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('link-donder-id')
        .setDescription('links donder id to discord user'),
    async execute(interaction) {
        const userID = interaction.user.id;

        await interaction.reply(`Linking Donder: ${userID}`);
        unlinkDonderToDiscord(userID);
    },
};