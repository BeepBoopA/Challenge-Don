import { SlashCommandBuilder } from 'discord.js';
import { pages, buttonActionRow  } from '../../modules/challengePage.js';

export default {
    data: new SlashCommandBuilder()
        .setName('view-challenge')
        .setDescription('Manually Set Challenge'),
    async execute(interaction) {
        let curPage = 0;
        const message = await interaction.reply({ 
            embeds: [pages[curPage]], 
            components: [buttonActionRow],
        });

        const collector = message.createMessageComponentCollector({ time: 360000 }); // 5 minutes of button clicking aoisfaj
        collector.on('collect', button => {
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

// TODO: Add Embed With 4 Pages