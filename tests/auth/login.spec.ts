import { test, expect } from '../../src/fixtures/test-fixtures';
import { credentials } from '../../src/fixtures/test-data';

test.describe('Authentication @auth', () => {
  test('TC-AUTH-001 valid user can log in @smoke', async ({ loginPage, loginCompletePage }) => {
    await test.step('Open the login page', async () => {
      await loginPage.goto();
    });

    await test.step('Submit valid credentials', async () => {
      await loginPage.login(credentials.validUser.username, credentials.validUser.password);
    });

    await test.step('Verify the login completion page', async () => {
      await loginCompletePage.expectLoaded();
      await expect(loginCompletePage.completionMessage).toBeVisible();
    });
  });
});
