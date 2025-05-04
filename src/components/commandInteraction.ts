import { Client, Events, EmbedBuilder, ActionRowBuilder, ButtonBuilder, CommandInteractionOption, CacheType } from 'discord.js';
import { challengeEmbed, challengeButton } from './challengeInterface';

export const commands = (client: Client<boolean>) => {
    // Interaction Setup
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isChatInputCommand()) { return; }

        if (interaction.commandName === 'register') {
            const donderID = interaction.options.get('donder-id')?.value;
            console.log(donderID);

            if (typeof donderID !== typeof Number) {
                return "Invalid Donder ID";
            }
        }
        if (interaction.commandName === 'unregister') {

        }
        if (interaction.commandName === 'challenge') {
            const embed: EmbedBuilder = challengeEmbed();
            const buttons: ActionRowBuilder<ButtonBuilder> = challengeButton();

            await interaction.reply(
                { 
                    embeds: [embed], 
                    components: [buttons],
                }
            );
        }
        if (interaction.commandName === 'setchallenge') {
            const chartOne = interaction.options.get('chart-1');
            const chartTwo = interaction.options.get('chart-2');
            const chartThree = interaction.options.get('chart-3');

            setupChallenge(chartOne, chartTwo, chartThree)
        }
    })

    // 'register' command functionality

    // 'unregister' command functionality

    // 'challenge' command functionality
    client.on(Events.InteractionCreate, async (interaction) => {
        if (!interaction.isButton()) { return; }

        if (interaction.customId === 'pageBackward') {
            await interaction.reply('Backward!');
        }
        if (interaction.customId === 'pageForward') {
            await interaction.reply('Forward!');
        }
    })

    // 'setChallenge' command functionality
    const setupChallenge = (chartOne: CommandInteractionOption<CacheType>, 
                            chartTwo: CommandInteractionOption<CacheType>, 
                            chartThree: CommandInteractionOption<CacheType>) => {

    }
}