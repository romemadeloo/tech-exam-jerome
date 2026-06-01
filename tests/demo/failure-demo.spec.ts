import { test } from '../../src/fixtures/test-fixtures';
import { credentials, messages } from '../../src/fixtures/test-data';

test.skip(!process.env.INCLUDE_DEMO_FAILURE, 'Run npm run test:demo-failure for the recording demo.');

test.describe('Reporting failure demonstration @demo-failure', () => {
  test('DEMO-FAIL-001 intentionally fails to show screenshots, traces, and Allure failure details', async ({
    loginPage
  }) => {
    await loginPage.goto();
    await loginPage.login(credentials.unknownUser.username, credentials.unknownUser.password);

    await loginPage.expectWarning(messages.invalidPassword);
  });
});
