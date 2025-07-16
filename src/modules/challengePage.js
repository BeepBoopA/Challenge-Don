import { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from 'discord.js';
import db from '../database/database.js';

const pageMain = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Overview')
    .addFields(
        { name: 'Chart 1', value: 'chart 1 image thing', inline: true },
        { name: 'Current Leader', value: 'profile pic and stuff', inline: true },
        { name: '', value: '', inline: false },
    )
    .addFields(
        { name: 'Chart 2', value: 'chart 2 image thing', inline: true },
        { name: 'Current Leader', value: 'profile pic and stuff', inline: true },
        { name: '', value: '', inline: false },
    )
    .addFields(
        { name: 'Chart 3', value: 'chart 3 image thing', inline: true },
        { name: 'Current Leader', value: 'profile pic and stuff', inline: true },
        { name: '', value: '', inline: false },
    );

const createChartPage = (chartName, image) => {
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(chartName)
        .addFields(
            { name: '', value: image },
            { name: 'Current Leader', value: 'profile pic and stuff' },
            { name: '2nd Place', value: 'profile pic and stuff' },
            { name: '3rd Place', value: 'profile pic and stuff' },
            { name: '', value: '' },
            { name: 'User Placement', value: 'profile pic and stuff' },
        );
}

const handleCharts = (challengeID, images) => {
    const charts = db.prepare(`SELECT c.* FROM charts c NATURAL JOIN challenge_charts cc
                               WHERE cc.challenge_id = ${challengeID}`).all();
    const chartsEmbed = [];
        
    for (let i = 0; i < charts.length; i++) {
        console.log('Chart: ', charts[i]);
        chartsEmbed.push(createChartPage(charts[i]['name'], `${images}.png idk`));

        // Get Current Leader
        // Get 2nd Place
        // Get 3rd Place
        // Get User Place
    }

    return chartsEmbed;
}

export const pages = [pageMain, ...handleCharts(1, 'test')]; // Repalce the parameters when finshed testing

export const buttonActionRow = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('prev')
            .setLabel('⬅️')
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId('next')
            .setLabel('➡️')
            .setStyle(ButtonStyle.Primary),
    );

// TODO: handleCharts leaderboard & make pageMain a function so it can display the charts