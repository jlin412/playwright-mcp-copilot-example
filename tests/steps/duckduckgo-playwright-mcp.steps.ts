import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
import type { Browser, Page } from 'playwright';
import { chromium } from 'playwright';
import { DuckDuckGoPage } from '../pages/duckduckgo-page';

let browser: Browser;
let page: Page;
let duckPage: DuckDuckGoPage;

Given('I am on the DuckDuckGo homepage', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  duckPage = new DuckDuckGoPage(page);
  await duckPage.goto();
  await duckPage.acceptCookiesIfPresent();
});

When('I search for {string}', async function (query: string) {
  await duckPage.search(query);
});

When('I click on the first search result', async function () {
  await duckPage.clickFirstResult();
});

Then('I should be on the {string} page', async function (expectedUrl: string) {
  await duckPage.assertUrl(expectedUrl);
});

Then('I should see the text {string} on the page', async function (expectedText: string) {
  await duckPage.assertTextVisible(expectedText);
  await browser.close();
});
