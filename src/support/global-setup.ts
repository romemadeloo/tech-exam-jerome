import fs from 'node:fs';
import path from 'node:path';

function sanitize(value: string): string {
  return value.replace(/\r?\n/g, ' ');
}

export default async function globalSetup(): Promise<void> {
  const resultsDir = path.resolve('allure-results');
  fs.mkdirSync(resultsDir, { recursive: true });

  const environment = [
    ['Application', 'ISR Technical Exam Web App'],
    ['Base URL', process.env.BASE_URL ?? 'http://35.78.90.242:8080/exam'],
    ['Framework', 'Playwright TypeScript'],
    ['Browser Project', 'chromium'],
    ['Node.js', process.version],
    ['Run Type', process.env.CI ? 'CI' : 'Local']
  ]
    .map(([key, value]) => `${key}=${sanitize(value)}`)
    .join('\n');

  fs.writeFileSync(path.join(resultsDir, 'environment.properties'), `${environment}\n`);
}
