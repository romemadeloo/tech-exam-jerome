export const credentials = {
  validUser: {
    username: process.env.EXAM_USERNAME ?? 'sakamoto',
    password: process.env.EXAM_PASSWORD ?? '1234passWord'
  },
  unknownUser: {
    username: 'unknown-user',
    password: 'anyPassword123'
  },
  wrongPassword: {
    username: process.env.EXAM_USERNAME ?? 'sakamoto',
    password: 'wrongPassword123'
  }
} as const;

export const messages = {
  loginComplete: 'ログイン完了',
  invalidUserId: 'ログインＩＤが存在しません',
  invalidPassword: 'パスワードが一致しません',
  passwordRequired: 'パスワードが未入力ﾃﾞｽ'
} as const;

export const appLabels = {
  loginHeading: 'Login',
  userIdLabel: 'ユーザーID',
  passwordLabel: 'パスワード',
  loginButton: 'ログイン',
  backLink: '戻る',
  footer: 'International Systems Research Co.'
} as const;
