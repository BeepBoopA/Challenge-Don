import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('set-challenge')
        .setDescription('Manually Set Challenge'),
    async execute(interaction) {
        await interaction.reply(`This command was run by ${interaction.user.username}`);
    },
};