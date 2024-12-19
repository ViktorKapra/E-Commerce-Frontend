export function IsValidPassword(password: string): boolean {
  const isPasswordLongEnough = password.length >= 8;
  const passwordRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return isPasswordLongEnough && passwordRegex.test(password);
}

export function IsValidEmail(email: string): boolean {
  const emailRegex = /^(?=.*\d)(?=.*[a-z])(?=.*\W)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return emailRegex.test(email);
}
