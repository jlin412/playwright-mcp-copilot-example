import re
import pytest
from playwright.sync_api import sync_playwright


def test_duckduckgo_search():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("https://duckduckgo.com")

            # Accept cookies if present
            try:
                accept_locator = page.locator('button', has_text=re.compile(r"accept|agree|consent", re.I)).first
                if accept_locator.is_visible(timeout=3000):
                    accept_locator.click()
            except Exception:
                # ignore if accept button not found or not clickable
                pass

            # Fill search
            search_box = page.locator('input[name="q"]')
            search_box.wait_for(timeout=10000)
            search_box.fill('github playwright mcp server')
            search_box.press('Enter')

            # Wait for first result
            first_result = page.locator('a[data-testid="result-title-a"]').first
            first_result.wait_for(timeout=15000)
            first_result.click()

            page.wait_for_url('https://github.com/microsoft/playwright-mcp', timeout=15000)
            assert page.url == 'https://github.com/microsoft/playwright-mcp'
        finally:
            browser.close()
