import { SlashCommandBuilder } from 'discord.js';
import db from '../../database/database.js';

export default {
    data: new SlashCommandBuilder()
        .setName('set-challenge')
        .setDescription('Manually Set Challenge')
        .addStringOption((option) =>
            option.setName('challenge-name')
                .setDescription('Name of challenge')
                .setRequired(true)
        )
        .addStringOption((option) => 
            option.setName('song-1')
                .setDescription('Select song 1')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName('song-2')
                .setDescription('Select song 2')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName('song-3')
                .setDescription('Select song 3')
                .setRequired(true)
        )
    ,
    async execute(interaction) {
        await interaction.reply(`Command 'set-challenge' was run by ${interaction.user.username}`);
        const challengeName = interaction.options.getString('challenge-name');
        const song1 = interaction.options.getString('song-1');
        const song2 = interaction.options.getString('song-2');
        const song3 = interaction.options.getString('song-3');

        try {
            let insert = null;

            insert = db.prepare('INSERT INTO challenges (name) VALUES (?)');
            const challengeID = insert.run(`${challengeName}`).lastInsertRowid;

            insert = db.prepare('INSERT INTO charts (name) VALUES (?)');
            const songIDs = [
                insert.run(`${song1}`).lastInsertRowid,
                insert.run(`${song2}`).lastInsertRowid,
                insert.run(`${song3}`).lastInsertRowid,
            ];

            insert = db.prepare('INSERT INTO challenge_charts (challenge_id, chart_id) VALUES (?, ?)');
            for (let i = 0; i < songIDs.length; i++) {
                insert.run(`${challengeID}`, `${songIDs[i]}`);
            }
        }
        catch(e) {
            console.error(e);
        }

        // Test:
        let select = null;
        let rows = null;

        select = db.prepare('SELECT * FROM challenges');
        rows = select.all();
        console.log('Challenge data: ', rows);

        select = db.prepare('SELECT * FROM charts');
        rows = select.all();
        console.log('Chart data: ', rows);

        select = db.prepare('SELECT * FROM challenge_charts');
        rows = select.all();
        console.log('Challenge - Chart data: ', rows);
    },
};

// Need Database of songs