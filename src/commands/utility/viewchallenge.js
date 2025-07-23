import { SlashCommandBuilder } from 'discord.js';
import ChallengeBuilder from '../../modules/challengePage.js';

export default {
    data: new SlashCommandBuilder()
        .setName('view-challenge')
        .setDescription('Manually Set Challenge'),
    async execute(interaction) {
        const cb = new ChallengeBuilder();
        cb.setUserId(interaction.user.id);
        const pages = cb.pages;
        const buttonActionRow = cb.buttonActionRow;

        let curPage = 0;
        const message = await interaction.reply({ 
            embeds: [pages[curPage]], 
            components: [buttonActionRow],
        });

        const collector = message.createMessageComponentCollector({ time: 60000 }); // 1 minute of button clicking aoisfaj
        collector.on('collect', async button => {
            if (button.customId === 'prev') {
                curPage = curPage > 0 ? --curPage : pages.length - 1;
            }
            else if (button.customId === 'next') {
                curPage = curPage + 1 < pages.length ? ++curPage : 0;
            }
            button.update({ embeds: [pages[curPage]], components: [buttonActionRow] });
        });

        collector.on('end', () => {
            message.edit({ components: [] });
        });

    },
};