import { SlashCommandBuilder } from 'discord.js';
import { createChallenge } from '../../modules/createChallenge.js';

export default {
    data: new SlashCommandBuilder()
        .setName('set-challenge')
        .setDescription('Manually Set Challenge')
        .addStringOption((option) =>
            option.setName('challenge-name')
                .setDescription('Name of challenge')
                .setRequired(true)
        )
        .addStringOption((option) => 
            option.setName('song-1')
                .setDescription('Select song 1')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName('song-2')
                .setDescription('Select song 2')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName('song-3')
                .setDescription('Select song 3')
                .setRequired(true)
        )
    ,
    async execute(interaction) {
        await interaction.reply(`Setting Challenge...`);

        const challengeName = interaction.options.getString("challenge-name");
        const song1 = interaction.options.getString("song-1");
        const song2 = interaction.options.getString("song-2");
        const song3 = interaction.options.getString("song-3");

        try {
            if (await createChallenge(challengeName, song1, song2, song3)) {
                await interaction.editReply('Challenge Set!')
            } else {
                await interaction.editReply('Failed to Set Challenge.')
            }
        } catch (error) {
            console.error('Error creating challenge:', error);
            await interaction.editReply('An error occurred while setting the challenge.');
        }
    }
};

// Need Database of songs