const puppeteer = require('puppeteer');

const username = '';
const password = '';

async function markAttend() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://adda.2adpro.com/');
  await page.setViewport({width: 1000, height: 500})
  await page.waitFor(1000);
  const userNameElement = await page.$('#username');
  await userNameElement.type(username, {delay: 100});
  const passwordElement = await page.$('#password');
  await passwordElement.type(password, {delay: 100});
  await page.waitFor(500);
  await passwordElement.press('Enter');
  await page.waitForNavigation();
  const inTimeBtn = 'body > div:nth-child(1) > div.header > div.riteheader > div.ritehead > span.usermsg > h3.lg_bu';
  await page.waitFor(1000);
  if (!!(await page.$(inTimeBtn))){
 	await page.click(inTimeBtn);
  } 
}

markAttend();
