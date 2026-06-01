# ISR Exam Playwright Automation

Playwright TypeScript automation framework for the ISR technical exam application:

`http://35.78.90.242:8080/exam/login`

This project is designed to demonstrate practical QA automation habits: clear test scope, Page Object Model, stable selectors, meaningful assertions, explicit reporting, known-defect handling, CI execution, and Allure report history through GitHub Pages.

## Tech Stack

- Playwright Test with TypeScript
- Page Object Model
- Playwright HTML report
- Allure report with history
- GitHub Actions CI
- GitHub Pages report publishing

## Project Structure

```text
.
├── .github/workflows/       # CI and Allure Pages publishing
├── docs/                    # Test plan, test cases, bugs, traceability
├── scripts/                 # Utility scripts
├── src/
│   ├── fixtures/            # Test data and Playwright fixtures
│   ├── pages/               # Page objects
│   └── support/             # Global setup/report metadata
├── tests/
│   ├── auth/                # Login and validation coverage
│   ├── demo/                # Intentional failure demo for recording
│   ├── known-bugs/          # Expected-failure defect coverage
│   └── navigation/          # Page navigation and form behavior
├── playwright.config.ts
└── package.json
```

## Prerequisites

- Node.js 20 or later
- npm
- Java Runtime Environment for local Allure CLI commands
- Git

## Setup

```bash
npm install
npx playwright install chromium
```

Optional local environment file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

## Test Commands

```bash
npm test
```

Runs the complete default suite, including smoke, authentication, validation, navigation, and expected-failure known-bug tests.

```bash
npm run test:smoke
npm run test:auth
npm run test:known-bugs
npm run test:headed
```

Run targeted suites.

```bash
npm run test:demo-failure
```

Runs one intentional failure that is excluded by default. Use this during the demo recording to show screenshots, traces, videos, and Allure failure details.

```bash
npm run typecheck
```

Validates the TypeScript code.

## Reports

Playwright HTML report:

```bash
npm run report
```

Generate and open Allure locally:

```bash
npm run allure:generate
npm run allure:open
```

Or serve directly from raw results:

```bash
npm run allure:serve
```

Generated report folders are ignored by Git:

- `playwright-report/`
- `test-results/`
- `allure-results/`
- `allure-report/`

## GitHub Actions and Allure History

The workflow is located at `.github/workflows/playwright-allure.yml`.

It does the following:

- Installs dependencies
- Installs Chromium
- Runs TypeScript checks
- Executes the Playwright suite
- Uploads Playwright and Allure artifacts
- Builds Allure with historical trends
- Publishes the report through GitHub Pages deployment

To enable GitHub Pages history:

1. Push the repository to GitHub.
2. Go to `Settings > Pages`.
3. Set source to `GitHub Actions`.
4. In repository settings, allow workflow permissions for GitHub Pages deployment if your organization restricts them.
5. Run the workflow once on `main` or `master`.

The latest Allure report will be available from the repository's GitHub Pages URL after the Pages deployment completes.

## Demo Recording Checklist

- Show the project structure and explain Page Objects, fixtures, and docs.
- Run `npm test`.
- Show the Playwright HTML report.
- Generate/open the Allure report.
- Run `npm run test:demo-failure`.
- Show the failure screenshot, trace, video, and Allure failure details.
- Show the GitHub Actions workflow and published Allure history page.
- Walk through at least one known bug in `docs/BUG_REPORTS.md`.

## Troubleshooting

- If the app is unavailable, rerun after confirming `http://35.78.90.242:8080/exam/login` is reachable.
- If browser launch fails, run `npx playwright install chromium` again.
- If Allure local commands fail, confirm Java is installed and available in `PATH`.
- If GitHub Pages does not publish, confirm Pages is configured to use `GitHub Actions` and the deploy job has `pages: write` and `id-token: write` permissions.
