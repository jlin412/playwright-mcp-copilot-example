# Python Test Framework (Playwright + Pytest)

This folder contains the Python Playwright + Pytest-BDD test framework for search engine automation.

## Setup

1. (Recommended) Create and activate a virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
python -m playwright install
```

## Running tests

Run all tests with:

```bash
pytest -q
```

## Project Structure

- `tests/features/search_engine_playwright_mcp.feature`: Cucumber-style feature file
- `tests/pages/search_engine_page.py`: Page object for search engine automation
- `tests/steps/test_search_engine_steps.py`: Step definitions for feature file

## Notes

- All references use generic "search_engine" naming.
- TypeScript version is not required for Python tests.
