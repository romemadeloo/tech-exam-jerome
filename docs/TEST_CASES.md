# Test Cases

| ID | Area | Scenario | Steps | Expected Result | Automated |
|---|---|---|---|---|---|
| TC-AUTH-001 | Authentication | Valid user can log in | Open login page, enter valid credentials, submit | Login completion page is displayed with `ログイン完了` and `戻る` link | `tests/auth/login.spec.ts` |
| TC-VAL-001 | Validation | Unknown user ID is rejected | Enter unknown user and any password, submit | Warning `ログインＩＤが存在しません` is displayed; password is cleared | `tests/auth/login-validation.spec.ts` |
| TC-VAL-002 | Validation | Wrong password is rejected | Enter valid user and wrong password, submit | Warning `パスワードが一致しません` is displayed; password is cleared | `tests/auth/login-validation.spec.ts` |
| TC-VAL-003 | Validation | Blank password is rejected | Enter valid user and blank password, submit | Warning `パスワードが未入力ﾃﾞｽ` is displayed | `tests/auth/login-validation.spec.ts` |
| TC-VAL-004 | Validation | Blank credentials are rejected | Submit blank user ID and blank password | User remains unauthenticated and password-required warning is displayed | `tests/auth/login-validation.spec.ts` |
| TC-NAV-001 | Navigation/UI | Login page renders expected controls | Open login page | Logo, heading, user ID, password, login button, and footer are visible | `tests/navigation/login-navigation.spec.ts` |
| TC-NAV-002 | Navigation | Back link returns from success page to login | Log in successfully, click `戻る` | Login page is displayed with empty fields | `tests/navigation/login-navigation.spec.ts` |
| TC-NAV-003 | Form behavior | Login form uses POST and disables autocomplete | Open login page, inspect form attributes | Form method is POST, action targets auth, autocomplete is off | `tests/navigation/login-navigation.spec.ts` |
| BUG-001 | Error handling | Empty user ID with populated password should not crash | Submit blank user ID and non-empty password | User-facing validation should appear; no HTTP 500 or stack trace | `tests/known-bugs/known-bugs.spec.ts` |
| BUG-002 | Accessibility | Password label should target password input | Inspect password label/input association | Password input should have matching `id=password` | `tests/known-bugs/known-bugs.spec.ts` |
| BUG-003 | Accessibility/UX | Keyboard tab order should be logical | Focus user ID and press Tab | Focus should move to password before login button | `tests/known-bugs/known-bugs.spec.ts` |
| DEMO-FAIL-001 | Reporting | Intentional failure for demo | Run failure demo script | Report captures screenshot, trace, video, and failed assertion | `tests/demo/failure-demo.spec.ts` |
