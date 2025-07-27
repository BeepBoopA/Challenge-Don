import { firefox } from 'playwright';
import { checkUserExists, deleteDiscordDonder, setDiscordDonder } from '../database/functions/user.js';

const checkValidDonder = async (donderID) => {
    const browser = await firefox.launch();
    const page = await browser.newPage();
    await page.goto('https://donderhiroba.jp/login.php');
    await page.getByRole('img', { name: 'ログイン' }).click();

    // Fill Email & Password
    await page.locator('#mail')
                .fill(process.env.MAIN_BOT_EMAIL || 'Empty Beans');
    await page.locator('#pass')
                .fill(process.env.MAIN_BOT_PASSWORD || 'Empty Cheese');

    // Front End Validation + Login
    await page.keyboard.press('Tab');
    await page.locator('#btn-idpw-login').click();
    await page.getByText('ログイン').click();

    // Find donderID
    await page.goto(`https://donderhiroba.jp/user_search.php?exec=1&keyword=${donderID}`);
    const donderExists = await page.locator('.friendArea.clearfix').isVisible();

    return donderExists;
}   

const checkValidUser = async (discordID, donderID) => {
    if (checkUserExists(discordID)) {
        console.log('User Already Linked, Please unlink first if you want to use another donderID');
        return;
    }
    if (!(donderID.length === 12)) {
        console.log('Invalid Length');
        return;
    }
    if (!(/^\d+$/.test(donderID))) {
        console.log('Invalid Character(s)');
        return;
    }
}

export const linkDonderToDiscord = async (discordID, donderID) => {
    checkValidUser(discordID, donderID);

    // Scrape Test
    if (await checkValidDonder(donderID)) {
        console.log('Valid ID');
<<<<<<< HEAD
        setDiscordDonder(discordID, donderID);
=======
        linkDonderToDiscord(discordID, donderID);
>>>>>>> e457b5c2aa938b7bb15955ce1c6a54cd5d2c9d7d
    }
    else {
        console.log('Invalid ID');
    }
}

export const unlinkDonderToDiscord = (discordID) => {
    if (!(checkUserExists())) {
        console.log('User is not linked')
        return;
    }
<<<<<<< HEAD
    deleteDiscordDonder(discordID);
=======
    unlinkDonderToDiscord(discordID);
>>>>>>> e457b5c2aa938b7bb15955ce1c6a54cd5d2c9d7d
}