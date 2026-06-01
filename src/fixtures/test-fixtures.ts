import { test as base } from '@playwright/test';

import { LoginCompletePage } from '../pages/LoginCompletePage';
import { LoginPage } from '../pages/LoginPage';

type ExamFixtures = {
  loginPage: LoginPage;
  loginCompletePage: LoginCompletePage;
};

export const test = base.extend<ExamFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  loginCompletePage: async ({ page }, use) => {
    await use(new LoginCompletePage(page));
  }
});

export { expect } from '@playwright/test';
