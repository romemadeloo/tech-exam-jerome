# Test Plan

## Objective

Validate the ISR exam web application's login behavior using maintainable Playwright TypeScript automation with clear reporting and CI execution.

## Application Under Test

- URL: `http://35.78.90.242:8080/exam/login`
- Valid user ID: `sakamoto`
- Valid password: `1234passWord`

## Scope

In scope:

- Login page rendering
- Successful authentication
- Negative authentication
- Login form validation
- Navigation from the success page back to login
- Basic UX/accessibility checks where defects were observed
- Automated reporting and CI execution

Out of scope:

- Backend database validation
- Load/performance testing
- Security penetration testing
- Browser matrix beyond Chromium for this exam submission

## Assumptions

- The test environment is publicly reachable during execution.
- The provided credentials remain valid.
- The application behavior is server-rendered and page navigation is expected after form submission.
- Japanese validation text is the expected user-facing behavior.

## Test Approach

- Use Playwright Test with TypeScript.
- Use Page Object Model for selectors and page actions.
- Prefer stable selectors: IDs, names, roles, and visible text.
- Use Playwright auto-waiting and targeted assertions instead of static sleeps.
- Keep known application defects under `tests/known-bugs` with `test.fail()` so they are documented without failing the main build.
- Keep the intentional report-demo failure separate and skipped unless explicitly requested.

## Test Data

| Type | User ID | Password |
|---|---|---|
| Valid user | `sakamoto` | `1234passWord` |
| Unknown user | `unknown-user` | `anyPassword123` |
| Wrong password | `sakamoto` | `wrongPassword123` |

## Entry Criteria

- Application login URL is reachable.
- Test dependencies are installed.
- Chromium browser is installed through Playwright.
- Test data is available through environment variables or defaults.

## Exit Criteria

- Smoke and core authentication tests pass.
- Validation behavior is covered.
- Known defects are documented with reproducible automated checks.
- Playwright and Allure reports are generated.
- CI workflow can run the suite and publish Allure history.

## Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Public test server unavailable | Tests fail before validation | Document as environment issue and rerun |
| Credentials changed | Login tests fail | Override via `EXAM_USERNAME` and `EXAM_PASSWORD` |
| Server-generated session IDs | Brittle URL checks | Use regex URL assertions |
| Japanese copy changes | Message assertions fail | Keep message constants centralized |

## Reporting

- Playwright HTML report for traces, screenshots, and videos.
- Allure report for test history, categories, severity-style review, and trend visibility.
- GitHub Actions artifacts for CI evidence.
- GitHub Pages for Allure history.
