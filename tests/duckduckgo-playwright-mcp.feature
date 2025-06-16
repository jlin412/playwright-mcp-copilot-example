Feature: DuckDuckGo search for Playwright MCP Server and verify GitHub page

    Scenario: Search for Playwright MCP Server and verify GitHub repository
        Given I am on the DuckDuckGo homepage
        When I search for "github playwright mcp server"
        And I click on the first search result
        Then I should be on the "https://github.com/microsoft/playwright-mcp" page
        And I should see the text "A Model Context Protocol (MCP) server" on the page
