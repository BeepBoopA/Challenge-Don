import { Client, Events, EmbedBuilder, ActionRowBuilder, ButtonBuilder } from 'discord.js';
import { challengeEmbed, challengeButton } from './challengeInterface';

export const commands = (client: Client<boolean>) => {
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
            
        }
    })

    client.on(Events.InteractionCreate, async (interaction) => {
        if (!interaction.isButton()) { return; }

        if (interaction.customId === 'pageBackward') {
            await interaction.reply('Backward!');
        }
        if (interaction.customId === 'pageForward') {
            await interaction.reply('Forward!');
        }
    })
}