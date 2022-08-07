export const validationFields = {
  email: /[a-zA-Z0-9]{2,3}@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}/,
  pw: /(?=.*[a-z])(?=.*[A-Z])(.{8,})/,
  firstname: /[a-zA-Z0-9]{3,}/,
  lastname: /[a-zA-Z0-9]{3,}/,
};
