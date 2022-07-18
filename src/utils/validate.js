export const validateEmail = (email) => {
  const reEmail = /[a-zA-Z0-9-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
  return reEmail.test(email);
};

export const confirmPwd = (password, confirm) => {
  return password !== confirm
};

export const passwordValidator = (password) => {
  const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
  return regExp.test(password)
};