const { test, expect } = require('@playwright/test')

// const { hello, helloworld } = require('./demo/hello')

// import { hello,helloworld } from './demo';
// console.log (hello());
// console.log(helloworld())

test('My First test', async ({page})=>{
await page.goto('https://google.com')
await expect(page).toHaveTitle('Google')

})