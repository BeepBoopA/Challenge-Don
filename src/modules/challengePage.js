import { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from 'discord.js';

const pageMain = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Overview')
    .addFields(
        {
            name: 'Chart 1', value: 'chart 1 image thing', inline: true
        },
        {
            name: 'Current Leader', value: 'profile pic and stuff', inline: true
        },
        {
            name: '', value: '', inline: false
        },
    )
    .addFields(
        {
            name: 'Chart 2', value: 'chart 2 image thing', inline: true
        },
        {
            name: 'Current Leader', value: 'profile pic and stuff', inline: true
        },
        {
            name: '', value: '', inline: false
        },
    )
    .addFields(
        {
            name: 'Chart 3', value: 'chart 3 image thing', inline: true
        },
        {
            name: 'Current Leader', value: 'profile pic and stuff', inline: true
        },
        {
            name: '', value: '', inline: false
        },
    );

const pageChart1 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Chart 1')
    .addFields(
        {
            name: '', value: 'chart 1 image thing',
        },
        {
            name: 'Current Leader', value: 'profile pic and stuff',
        },
        {
            name: '2nd Place', value: 'profile pic and stuff',
        },
        {
            name: '3rd Place', value: 'profile pic and stuff',
        },
        {
            name: '', value: '',
        },
        {
            name: 'User Placement', value: 'profile pic and stuff',
        },
    );

const pageChart2 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Chart 2')
    .addFields(
        {
            name: '', value: 'chart 2 image thing',
        },
        {
            name: 'Current Leader', value: 'profile pic and stuff',
        },
        {
            name: '2nd Place', value: 'profile pic and stuff',
        },
        {
            name: '3rd Place', value: 'profile pic and stuff',
        },
        {
            name: '', value: '',
        },
        {
            name: 'User Placement', value: 'profile pic and stuff',
        },
    );

const pageChart3 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Chart 3')
    .addFields(
        {
            name: '', value: 'chart 3 image thing',
        },
        {
            name: 'Current Leader', value: 'profile pic and stuff',
        },
        {
            name: '2nd Place', value: 'profile pic and stuff',
        },
        {
            name: '3rd Place', value: 'profile pic and stuff',
        },
        {
            name: '', value: '',
        },
        {
            name: 'User Placement', value: 'profile pic and stuff',
        },
    );

export const pages = [pageMain, pageChart1, pageChart2, pageChart3];

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

// Work with chart 1 since chart 2 and 3 are replicas