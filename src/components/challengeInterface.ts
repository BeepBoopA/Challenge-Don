import { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js';

export const challengeEmbed = () => {
    const embed = new EmbedBuilder()
        .setTitle('Challenge')
        .setDescription('Description')
        .setColor('Random')
        .addFields(
            {
                name: 'chartName1',
                value: 'Highest on Leaderboard'
            },
            {
                name: 'chartName2',
                value: 'Highest on Leaderboard'
            },
            {
                name: 'chartName3',
                value: 'Highest on Leaderboard'
            }
        )
    
    return embed;
} 

export const challengeButton = () => {
    const backward = new ButtonBuilder()
        .setCustomId('pageBackward')
        .setStyle(ButtonStyle.Primary)
        .setLabel('⮜')

    const forward = new ButtonBuilder()
        .setCustomId('pageForward')
        .setStyle(ButtonStyle.Primary)
        .setLabel('⮞')

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents([
        backward, 
        forward
    ]);

    return row;
}
