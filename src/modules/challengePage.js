import { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from 'discord.js';
import db from '../database/database.js';

/*
    images (property)
        need to be a array of exactly 3 images
*/

const createPageMain = (challengeID, images) => { 
    const charts = getCharts(challengeID);
    const leaders = [];

    console.log(charts[0]['chart_id']);

    for (let i = 0; i < charts.length; i++) {
        const scores = getUserScores(challengeID, charts[i]).map((u) => u.score);
        leaders.push(scores[0] ?? 'No score');
    }

    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Overview')
        .addFields(
            { name: 'Chart 1', value: images[0], inline: true },
            { name: '1st Place', value: `${leaders[0]} replace w/ discord img`, inline: true },
            { name: '', value: '', inline: false },
        )
        .addFields(
            { name: 'Chart 2', value: images[1], inline: true },
            { name: '1st Place', value: `${leaders[1]} replace w/ discord img`, inline: true },
            { name: '', value: '', inline: false },
        )
        .addFields(
            { name: 'Chart 3', value: images[2], inline: true },
            { name: '1st Place', value: `${leaders[2]} replace w/ discord img`, inline: true },
            { name: '', value: '', inline: false },
        );
}

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
    const charts = getCharts(challengeID);
    const chartsEmbed = [];
        
    for (let i = 0; i < charts.length; i++) {
        console.log('Chart: ', charts[i]);

        const userChartScores = getUserScores(challengeID, charts[i]);

        // Get Scores
        const [firstPlace = 'No score', secondPlace = 'No score', thirdPlace = 'No score'] =
            userChartScores.map(u => u.score);
        
        const userPlace = 'what the sigma (this means implement)';

        const embed = createChartEmbed(`${charts[i]['name']}`, 'img', firstPlace, secondPlace, thirdPlace, userPlace);
        chartsEmbed.push(embed);
    }

    return chartsEmbed;
}

const getCharts = (challengeID) => {
    return db.prepare(`SELECT c.* FROM charts c NATURAL JOIN challenge_charts cc
                       WHERE cc.challenge_id=${challengeID}`).all();
}

const getUserScores = (challengeID, chart) => {
    return db.prepare(`SELECT u.guild_id, s.* FROM charts c NATURAL JOIN challenge_charts cc NATURAL JOIN scores s NATURAL JOIN users u
                       WHERE cc.challenge_id=${challengeID} AND cc.chart_id=${chart['chart_id']}
                       ORDER BY s.score DESC
                      `).all();
}

export const pages = [createPageMain(1, ['test1', 'test2', 'test3']), ...handleChartsEmbed(1, 'test')]; // Replace the parameters when finshed testing

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

// TODO: refactor this god awful code why are there so many functions ahhhhhh
// TODO: make insert many (https://github.com/WiseLibs/better-sqlite3/blob/HEAD/docs/api.md)
// TODO: make test cases to test score system
// TODO: add userPlacement in handleChart