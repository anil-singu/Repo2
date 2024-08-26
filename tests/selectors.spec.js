import { test, expect } from '@playwright/test'
import { text } from 'stream/consumers';

test('Seklectors Demo', async ({ page }) => {

    await page.goto('https://saucedemo.com/')

    await page.pause()
    //using object property
    await page.click('id=user-name')
    await page.locator('id=user-name').click()
    await page.locator('id=user-name').fill('Krishna')
    await page.locator('[id="user-name"]').fill('Radha')


    //usng CSS selector 
    //#login-button
    await page.locator('#login-button').click()
    await page.pause();
    //using xpath
    await page.locator('xpath=//input[@name="user-name"]').fill('HareKrishna')
    await page.locator('//input[@name="user-name"]').fill('HareRama')
    await page.pause();

    //using text

    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()
    await page.locator('text=LOGIN').click()

});