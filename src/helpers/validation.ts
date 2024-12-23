export function isValidPassword(password: string): boolean {
  const isPasswordLongEnough = password.length >= 8;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*\W)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return isPasswordLongEnough && passwordRegex.test(password);
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return emailRegex.test(email);
}
