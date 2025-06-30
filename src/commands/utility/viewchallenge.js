import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('view-challenge')
        .setDescription('Manually Set Challenge'),
    async execute(interaction) {
        await interaction.reply(`Command 'view-challenge' was run by ${interaction.user.username}`);
    },
};