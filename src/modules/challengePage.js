import { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from 'discord.js';
import db from '../database/database.js';

const pageMain = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Overview')
    .addFields(
        { name: 'Chart 1', value: 'chart 1 image thing', inline: true },
        { name: '1st Place', value: 'profile pic and stuff', inline: true },
        { name: '', value: '', inline: false },
    )
    .addFields(
        { name: 'Chart 2', value: 'chart 2 image thing', inline: true },
        { name: '1st Place', value: 'profile pic and stuff', inline: true },
        { name: '', value: '', inline: false },
    )
    .addFields(
        { name: 'Chart 3', value: 'chart 3 image thing', inline: true },
        { name: '1st Place', value: 'profile pic and stuff', inline: true },
        { name: '', value: '', inline: false },
    );

const createChartEmbed = (chartName, image, firstPlace, secondPlace, thirdPlace, userPlace) => {
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(chartName)
        .addFields(
            { name: '', value: image },
            { name: '1st Place', value: `${firstPlace} replace w/ discord img` },
            { name: '2nd Place', value: `${secondPlace} replace w/ discord img` },
            { name: '3rd Place', value: `${thirdPlace} replace w/ discord img` },
            { name: '', value: '' },
            { name: 'User Placement', value: `${userPlace} replace w/ discord img` },
        );
}

const handleChartsEmbed = (challengeID, images) => {
    const charts = db.prepare(`SELECT c.* FROM charts c NATURAL JOIN challenge_charts cc
                               WHERE cc.challenge_id=${challengeID}`).all();
    const chartsEmbed = [];
        
    for (let i = 0; i < charts.length; i++) {
        console.log('Chart: ', charts[i]);

        const userChartScores = db.prepare(`SELECT u.guild_id, s.* FROM charts c NATURAL JOIN challenge_charts cc NATURAL JOIN scores s NATURAL JOIN users u
                                   WHERE cc.challenge_id=${challengeID} AND cc.chart_id=${charts[i]['chart_id']}
                                   ORDER BY s.score DESC
                                   `).all();

        // Get Scores
        const [firstPlace = 'No score', secondPlace = 'No score', thirdPlace = 'No score'] =
            userChartScores.map(u => u.score);
        
        const userPlace = 'what the sigma (this means implement)';

        const embed = createChartEmbed(`${charts[i]['name']}`, 'img', firstPlace, secondPlace, thirdPlace, userPlace);
        chartsEmbed.push(embed);
    }

    return chartsEmbed;
}

export const pages = [pageMain, ...handleChartsEmbed(1, 'test')]; // Replace the parameters when finshed testing

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

// TODO: make pageMain a function so it can display the charts
// TODO: make insert many (https://github.com/WiseLibs/better-sqlite3/blob/HEAD/docs/api.md)
// TODO: make test cases to test score system
// TODO: add userPlacement in handleChart