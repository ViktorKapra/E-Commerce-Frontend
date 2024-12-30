import { FieldErrors, RegisterOptions } from "react-hook-form";

export function findInputError(err: FieldErrors, name: string): FieldErrors {
  return Object.keys(err)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: err[key] });
    }, {});
}

export const emailValidation: RegisterOptions = {
  required: {
    value: true,
    message: "Required",
  },
  pattern: {
    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
    message: "Invalid email",
  },
};

export const passwordValidation: RegisterOptions = {
  required: {
    value: true,
    message: "Required",
  },
  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    message: "Min 8 characters, at least one uppercase letter, one lowercase letter and one number",
  },
};

export const isFormInvalid = (err: object) => {
  return Object.keys(err).length > 0;
};
