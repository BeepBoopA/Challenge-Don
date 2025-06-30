import { SlashCommandBuilder } from 'discord.js';
import { linkDonderToDiscord } from '../../modules/linkDonderDiscord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('link-donder-id')
        .setDescription('links donder id to discord user')
        .addStringOption((option) =>
            option.setName('donder-id')
                .setDescription('Enter your donder ID')
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.user.username;
        const donderID = interaction.options.getString('donder-id');

        await interaction.reply(`Linking Donder: ${user} & ${donderID}`);
        linkDonderToDiscord(donderID);
    },
};