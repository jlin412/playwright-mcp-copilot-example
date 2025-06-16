# Playwright MCP Copilot Example

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
