# Bug Reports

## BUG-001: Empty User ID with Populated Password Returns HTTP 500

| Field | Details |
|---|---|
| Severity | High |
| Priority | P1 |
| Area | Login validation / error handling |
| Status | Open |
| Automated check | `tests/known-bugs/known-bugs.spec.ts` |

### Steps to Reproduce

1. Open `http://35.78.90.242:8080/exam/login`.
2. Leave User ID blank.
3. Enter any non-empty password, for example `anyPassword123`.
4. Click `ログイン`.

### Expected Result

The application should remain on the login flow and display a user-friendly validation message for the missing User ID.

### Actual Result

The application returns an Apache Tomcat HTTP 500 error page with a Java `NullPointerException`.

### Impact

Users receive a technical server error instead of actionable validation. The stack trace also exposes implementation details.

## BUG-002: Password Label Is Not Programmatically Associated with Password Input

| Field | Details |
|---|---|
| Severity | Medium |
| Priority | P2 |
| Area | Accessibility / HTML semantics |
| Status | Open |
| Automated check | `tests/known-bugs/known-bugs.spec.ts` |

### Steps to Reproduce

1. Open the login page.
2. Inspect the password label and input markup.

### Expected Result

The password label should reference an existing password input ID, for example `label for="password"` and `input id="password"`.

### Actual Result

The label uses `for="password"`, but the password input has no matching `id`.

### Impact

Assistive technologies and label-click behavior may not work correctly for the password field.

## BUG-003: Keyboard Tab Order Jumps from User ID to Login Before Password

| Field | Details |
|---|---|
| Severity | Medium |
| Priority | P2 |
| Area | Accessibility / keyboard navigation |
| Status | Open |
| Automated check | `tests/known-bugs/known-bugs.spec.ts` |

### Steps to Reproduce

1. Open the login page.
2. Focus the User ID field.
3. Press `Tab`.

### Expected Result

Focus should move to the password field.

### Actual Result

Focus moves to the login button first because the login button has `tabindex="2"` and the password field has `tabindex="3"`.

### Impact

Keyboard-only users may submit the form before entering a password.

## BUG-004: Page Title Appears to Be Placeholder Text

| Field | Details |
|---|---|
| Severity | Low |
| Priority | P3 |
| Area | Usability / browser metadata |
| Status | Open |
| Automated check | Manual observation |

### Steps to Reproduce

1. Open the login page.
2. Observe the browser tab title or inspect the HTML `<title>`.

### Expected Result

The title should describe the page, for example `Login`.

### Actual Result

The title is `hogehoge`.

### Impact

The browser tab title is unclear and may look unfinished to users.
