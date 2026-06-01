# Submission Guide

## Repository

Target repository:

`https://github.com/romemadeloo/tech-exam-jerome.git`

## Examiner Access

After pushing the repository, share repository access with:

- `sandonar@isr.com.ph`
- `hazel@isr.com.ph`
- `almira@isr.com.ph`

If using a private repository, add them as collaborators or grant access through the organization/team settings before sending the final submission link.

## CI and Allure Pages Setup

1. Push the project to GitHub.
2. Open the repository on GitHub.
3. Go to `Actions`.
4. Run `Playwright E2E with Allure` from the default branch.
5. After the workflow publishes the `gh-pages` branch, go to `Settings > Pages`.
6. Set source to `Deploy from a branch`.
7. Select branch `gh-pages` and folder `/root`.
8. Save and wait for the Pages URL to become available.

The workflow publishes the latest Allure report and keeps previous report history for trend visibility.

## Recommended Submission Evidence

Include these links or artifacts in the final email/message:

- GitHub repository URL
- GitHub Actions workflow run URL
- GitHub Pages Allure report URL
- Demo recording link
- Notes about known defects documented in `docs/BUG_REPORTS.md`

## Demo Recording Flow

1. Show the repository structure.
2. Explain the Page Object Model files in `src/pages`.
3. Explain centralized test data and fixtures in `src/fixtures`.
4. Run:

   ```bash
   npm test
   ```

5. Open the Playwright report:

   ```bash
   npm run report
   ```

6. Run the intentional failure demo:

   ```bash
   npm run test:demo-failure
   ```

7. Show the failed assertion, screenshot/video evidence, and report details.
8. Show `docs/BUG_REPORTS.md`, especially `BUG-001`.
9. Show the GitHub Actions workflow and Allure Pages report.

## Local Allure Note

Local Allure generation requires Java/JAVA_HOME:

```bash
npm run allure:generate
npm run allure:open
```

GitHub Actions can still publish Allure history through the configured workflow.
