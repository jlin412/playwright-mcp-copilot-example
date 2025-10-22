import re
from playwright.sync_api import Page

class SearchEnginePage:
    def __init__(self, page: Page):
        self.page = page

    def goto(self):
        self.page.goto('https://search.brave.com/', wait_until='load')
        self.page.set_extra_http_headers({
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
        })

    def accept_cookies_if_present(self):
        # Brave Search does not typically show cookie banners, but handle if present
        try:
            cookie_button = self.page.locator('button', has_text=re.compile(r"Accept|Agree|Consent", re.I)).first
            if cookie_button.is_visible(timeout=5000):
                cookie_button.click()
        except Exception:
            pass

    def search(self, query: str):
        search_box = self.page.locator('textarea[name="q"]')
        search_box.wait_for(timeout=10000)
        search_box.fill(query)
        search_box.press('Enter')
        # Wait for first result
        first_result = self.page.locator('a[href="https://github.com/microsoft/playwright-mcp"]').first
        first_result.wait_for(timeout=15000)

    def click_first_result(self):
        first_result = self.page.locator('a[href="https://github.com/microsoft/playwright-mcp"]').first
        with self.page.expect_event("framenavigated"):
            first_result.click()

    def assert_url(self, expected_url: str):
        self.page.wait_for_url(expected_url, timeout=15000)
        assert self.page.url == expected_url, f"Expected URL to be {expected_url} but got {self.page.url}"

    def assert_text_visible(self, expected_text: str):
        locator = self.page.locator(f'text={expected_text}')
        locator.wait_for(state='visible', timeout=10000)
