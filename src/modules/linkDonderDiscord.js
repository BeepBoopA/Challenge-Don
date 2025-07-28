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

const checkValidUser = (discordID, donderID) => {
    if (checkUserExists(discordID)) {
        console.log('User Already Linked, Please unlink first if you want to use another donderID');
        return false;
    }
    if (!(donderID.length === 12)) {
        console.log('Invalid Length');
        return false;
    }
    if (!(/^\d+$/.test(donderID))) {
        console.log('Invalid Character(s)');
        return false;
    }
    return true;
}

export const linkDonderToDiscord = async (discordID, donderID) => {
    if (!(checkValidUser(discordID, donderID))) {
        return;
    }

    // Scrape Test
    if (await checkValidDonder(donderID)) {
        console.log('Valid ID');
        setDiscordDonder(discordID, donderID);
    }
    else {
        console.log('Invalid ID');
    }
}

export const unlinkDonderToDiscord = async (discordID) => {
    if (!(checkUserExists(discordID))) {
        console.log('User is not linked')
        return;
    }
    deleteDiscordDonder(discordID);
    console.log('Deleted User');
}