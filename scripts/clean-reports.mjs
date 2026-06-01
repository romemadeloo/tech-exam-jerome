import fs from 'node:fs';
import path from 'node:path';

const reportPaths = [
  'test-results',
  'playwright-report',
  'allure-results',
  'allure-report'
];

for (const reportPath of reportPaths) {
  fs.rmSync(path.resolve(reportPath), { recursive: true, force: true });
}
