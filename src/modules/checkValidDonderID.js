import { firefox } from 'playwright';

const checkValidDonderID = async (donderID) => {
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

export const linkDonderToDiscord = async (donderID) => {
    // Pre-validation
    if (donderID.length() != 12) {
        return 'Invalid Length'
    }
    if (!(/^\d+$/.test(donderID))) {
        return 'Invalid Character(s)'
    }

    // Scrape Test
    if (await checkValidDonderID(donderID)) {
        console.log('Valid ID');
    }
    else {
        console.log('Invalid ID');
    }
}

// TODO: Add try catch
// TODO: Link to database
// TODO: Add session tokens & stuff