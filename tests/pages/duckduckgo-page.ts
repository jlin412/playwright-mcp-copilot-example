import type { Page } from 'playwright';

export class DuckDuckGoPage {
  public page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://duckduckgo.com', { waitUntil: 'load' });
  }

  async acceptCookiesIfPresent() {
    const acceptButton = this.page.locator('button', { hasText: /accept|agree|consent/i });
    if (await acceptButton.first().isVisible({ timeout: 5000 }).catch(() => false)) {
      await acceptButton.first().click();
    }
  }

  async search(query: string) {
    const searchBox = this.page.locator('input[name="q"]');
    await searchBox.waitFor({ timeout: 10000 });
    await searchBox.fill(query);
    await searchBox.press('Enter');
    const firstResult = this.page.locator('a[data-testid="result-title-a"]:visible').first();
    await firstResult.waitFor({ timeout: 15000 });
  }

  async clickFirstResult() {
    const firstResult = this.page.locator('a[data-testid="result-title-a"]:visible').first();
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      firstResult.click(),
    ]);
  }

  async assertUrl(expectedUrl: string) {
    await this.page.waitForURL(expectedUrl, { timeout: 15000 });
    if (this.page.url() !== expectedUrl) {
      throw new Error(`Expected URL to be ${expectedUrl} but got ${this.page.url()}`);
    }
  }

  async assertTextVisible(expectedText: string) {
    await this.page.locator(`text=${expectedText}`).waitFor({ state: 'visible', timeout: 10000 });
  }
}
