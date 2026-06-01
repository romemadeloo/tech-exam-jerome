# Traceability Matrix

| Requirement | Coverage | Test Case IDs | Automated Location |
|---|---|---|---|
| Access login application with provided credentials | Positive login is automated | TC-AUTH-001 | `tests/auth/login.spec.ts` |
| User authentication: login | Valid, invalid user, wrong password, blank input paths | TC-AUTH-001, TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-VAL-004 | `tests/auth/` |
| User authentication: logout | No logout function observed; success page has return link only | TC-NAV-002 | `tests/navigation/login-navigation.spec.ts` |
| Navigation between pages | Login page to success page and back to login | TC-AUTH-001, TC-NAV-002 | `tests/auth/`, `tests/navigation/` |
| Form submissions and validations | POST form behavior and validation messages | TC-NAV-003, TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-VAL-004 | `tests/navigation/`, `tests/auth/` |
| Error handling | Known HTTP 500 defect captured as expected failure | BUG-001 | `tests/known-bugs/known-bugs.spec.ts` |
| User interactions | Fill, click, tab navigation, link navigation | TC-AUTH-001, TC-NAV-002, BUG-003 | `tests/` |
| Assertions | URL, visibility, text, value, attributes, focus | All automated cases | `tests/` and `src/pages/` |
| Synchronization | Playwright auto-waiting and assertion timeouts | All automated cases | `playwright.config.ts` |
| Logical suites/packages | Auth, navigation, known bugs, demo failure | All automated cases | `tests/` |
| Documentation | Test plan, cases, bugs, traceability, README | Documentation set | `docs/`, `README.md` |
| Reporting/logs | Playwright HTML, Allure results/history, CI artifacts | DEMO-FAIL-001 plus all suites | `playwright.config.ts`, `.github/workflows/playwright-allure.yml` |
