# Python Test Framework (Playwright + Pytest)

This folder contains a Python port of the existing TypeScript Playwright + Cucumber test framework. The TypeScript version is preserved at the project root.

## Setup

1. Create a virtual environment (optional but recommended):

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

Run with pytest:

```bash
pytest -q
```
