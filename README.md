# Playwright MCP Copilot Example

## About This Framework

This project demonstrates an end-to-end testing framework that combines Playwright for browser automation with Cucumber for behavior-driven development (BDD). The intention is to enable clear, maintainable, and human-readable test scenarios that map directly to automated browser actions.

This repository also serves as an example of how to generate tests and a test framework using the Model Context Protocol (MCP) server and GitHub Copilot. It showcases how AI-assisted workflows can accelerate the creation of both feature files and automation code, making it easier to build robust, intention-driven test suites.

- **Playwright** provides fast, reliable browser automation for modern web apps.
- **Cucumber** allows you to write test cases in plain English using the Gherkin syntax, making tests accessible to both developers and non-developers.
- **MCP server & Copilot**: Demonstrates how AI tools can help generate and maintain both test scenarios and framework code, streamlining the test development process.
- **Intention-driven design**: Feature files describe user intentions and expected outcomes, while step definitions and page objects translate those intentions into robust, reusable automation code.

This approach helps teams:

- Collaborate on test scenarios using natural language
- Keep automation code organized and maintainable
- Quickly adapt tests to UI or workflow changes

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/jlin412/playwright-mcp-copilot-example.git
cd playwright-mcp-copilot-example
npm install
```

## Running Cucumber Tests

To execute the Cucumber tests, run:

```sh
npx cucumber-js
```

Or to run a specific feature file:

```sh
npx cucumber-js tests/duckduckgo-playwright-mcp.feature
```

## Project Structure

- `tests/` - Contains feature files, step definitions, and page objects
- `src/` - Source files for the application (if any)
- `.gitignore` - Files and folders to be ignored by git

## Notes

- Make sure all dependencies are installed before running tests.
- For Playwright browser automation, the first run may download browser binaries.
- If you encounter issues with browser launching, try running `npx playwright install`.
