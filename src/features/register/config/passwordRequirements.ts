interface PasswordRequirements {
  key: string;
  test: (password: string) => boolean;
}

export const passwordRequirements: PasswordRequirements[] = [
  {
    key: 'Minimal length',
    test: (password: string) => password.length >= 8,
  },

  {
    key: 'Contains at least 1 uppercase symbol',
    test: (password: string) => /[A-Z]/.test(password),
  },

  {
    key: 'Contains at least 1 lowercase symbol',
    test: (password: string) => /[a-z]/.test(password),
  },
  {
    key: 'Contains at least 1 number',
    test: (password: string) => /\d/.test(password),
  },
];
