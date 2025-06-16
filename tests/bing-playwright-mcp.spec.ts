import { test, expect } from '@playwright/test';

test('DuckDuckGo search for Playwright MCP Server and verify GitHub page', async ({ page }) => {
  test.setTimeout(60000);
  // 1. Load duckduckgo.com
  await page.goto('https://duckduckgo.com', { waitUntil: 'load' });

  // Accept cookies if prompted
  const acceptButton = page.locator('button', { hasText: /accept|agree|consent/i });
  if (await acceptButton.first().isVisible({ timeout: 5000 }).catch(() => false)) {
    await acceptButton.first().click();
  }

  // 2. Search for "github playwright mcp server"
  const searchBox = page.locator('input[name="q"]');
  await searchBox.waitFor({ timeout: 10000 });
  await searchBox.fill('github playwright mcp server');
  await searchBox.press('Enter');

  // Wait for results container or first result link
  const firstResult = page.locator('a[data-testid="result-title-a"]:visible').first();
  await Promise.race([
    firstResult.waitFor({ timeout: 15000 }),
    page.locator('.results--main, #react-layout, #links').waitFor({ timeout: 15000 }).catch(() => {})
  ]);

  // 3. Click on the first search result
  await firstResult.waitFor({ timeout: 10000 });
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    firstResult.click(),
  ]);

  // 4. Verify the loaded URL is https://github.com/microsoft/playwright-mcp
  await page.waitForURL('https://github.com/microsoft/playwright-mcp', { timeout: 15000 });
  expect(page.url()).toBe('https://github.com/microsoft/playwright-mcp');

  // 5. Verify the text "A Model Context Protocol (MCP) server" appears on the page
  await expect(page.locator('text=A Model Context Protocol (MCP) server')).toBeVisible();
});
