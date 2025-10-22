import re
import pytest
from playwright.sync_api import sync_playwright
from pytest_bdd import scenarios, given, when, then, parsers
from python.tests.pages.duckduckgo_page import SearchEnginePage

scenarios('../features/duckduckgo_playwright_mcp.feature')

@pytest.fixture
def context():
    class Context:
        pass
    return Context()

@given('I am on the search engine homepage')
def step_search_engine_homepage(context):
    context.pw = sync_playwright().start()
    context.browser = context.pw.chromium.launch(headless=True)
    context.page = context.browser.new_page()
    context.search_engine_page = SearchEnginePage(context.page)
    context.search_engine_page.goto()
    context.search_engine_page.accept_cookies_if_present()

@when(parsers.parse('I search for "{query}"'))
def step_search(context, query):
    context.search_engine_page.search(query)

@when('I click on the first search result')
def step_click_first_result(context):
    context.search_engine_page.click_first_result()

@then(parsers.parse('I should be on the "{expected_url}" page'))
def step_should_be_on_page(context, expected_url):
    context.search_engine_page.assert_url(expected_url)

@then(parsers.parse('I should see the text "{expected_text}" on the page'))
def step_should_see_text(context, expected_text):
    context.search_engine_page.assert_text_visible(expected_text)
    context.browser.close()
    context.pw.stop()
