import { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from 'discord.js';
import { getCharts, getScores, getUserPlacement } from '../database/functions/challengeCharts.js';

/*
    images (property)
        need to be a array of exactly 3 images
        preferably same size images
*/
class ChallengeBuilder {
    static userID = null;

    setUserId(userID) { this.userID = userID; }

    createPageMain(challengeID, images) { 
        const charts = getCharts(challengeID);
        const leaders = [];

        for (let i = 0; i < charts.length; i++) {
            const scores = getScores(challengeID, charts[i]).map((u) => u.score);
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

    createChartEmbed(chartName, image, firstPlace, secondPlace, thirdPlace, userPlace) {
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

    handleChartsEmbed(challengeID, images) {
        const charts = getCharts(challengeID);
        const chartsEmbed = [];
            
        for (let i = 0; i < charts.length; i++) {
            const userChartScores = getScores(challengeID, charts[i]);

            // Get Scores
            const [firstPlace = 'No score', secondPlace = 'No score', thirdPlace = 'No score'] =
                userChartScores.map((u) => u.score);

            const userPlaceObj = getUserPlacement(challengeID, charts[i], this.userID);
            const userPlaceStr = userPlaceObj['score'];

            const embed = this.createChartEmbed(`${charts[i]['name']}`, 'img', firstPlace, secondPlace, thirdPlace, userPlaceStr);
            chartsEmbed.push(embed);
        }

        return chartsEmbed;
    }

    // Replace the parameters when finshed testing
    pages = [this.createPageMain(1, ['test1', 'test2', 'test3']), ...this.handleChartsEmbed(1, 'test')];

    /*
        Do not change CustomId (if so change in viewchallenge.js)
    */
    buttonActionRow = new ActionRowBuilder()
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
}

export default ChallengeBuilder;

// TODO: make test cases to test score system
// TODO: Make something where unregistered users can view challenge (user placement doesnt show up)