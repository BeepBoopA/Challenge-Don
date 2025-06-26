import { firefox } from 'playwright';

const checkValidDonderID = async (donderID) => {
    const broswer = await firefox.launch();
    const page = broswer.newPage();
    await page.goto('https://donderhiroba.jp/login.php');
}