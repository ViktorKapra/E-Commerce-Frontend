import { RegisterOptions } from "react-hook-form";

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
