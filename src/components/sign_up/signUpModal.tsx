import InputText from "@/elements/controls/inputText";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Modal from "@/elements/modal/modal";
import { isValidEmail, isValidPassword } from "@/helpers/validation";
import { signUpUser } from "@/api/auth";
import { AuthContext } from "@/helpers/context/authContext";
import * as styles from "./signUp.m.scss";

export default function SignUpModal() {
  const {
    authenticatedUser,
    setAuthenticatedUser,
    isSignUpModalOpened: isOpened,
    setIsSignUpModalOpened: setIsOpened,
  } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleUnsuccessfulClose = () => {
    setIsOpened(false);
  };

  function generateValidationMessage() {
    let validationMassage = "";
    validationMassage += !isValidEmail(formData.email) ? "Invalid email\n" : "";
    validationMassage += !isValidPassword(formData.password)
      ? "Your password must have at least 8 characters; must contain at least: \n - 1 uppercase character \n - 1 lowercase character; \n - 1 number. \n"
      : "";
    validationMassage += formData.password !== formData.confirmPassword ? "Passwords do not match.\n" : "";
    return validationMassage;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationMassage = generateValidationMessage();
    if (validationMassage !== "") {
      alert(validationMassage);
      return;
    }

    console.error(formData);
    const resultPromise = signUpUser(formData.email, formData.password);
    resultPromise
      .then((result) => {
        if (result) {
          console.log("Sign-Up is successful!");
          setIsOpened(false);
          setAuthenticatedUser(formData.email);
        } else {
          alert("Invalid credentials!");
        }
      })
      .catch((error: Error) => {
        console.error(error);
      });
  };
  return (
    (authenticatedUser === "" && (
      <Modal open={isOpened} handleClose={handleUnsuccessfulClose}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.wrapper}>
            <h1 className={styles.h1}>Registration</h1>
          </div>
          <div className={styles.wrapper}>
            <InputText
              id="email"
              name="email"
              value={formData.email}
              handleChange={handleChange}
              placeholder="Username"
              labelText="Login"
            />
          </div>

          <div className={styles.wrapper}>
            <InputText
              id="password"
              name="password"
              value={formData.password}
              handleChange={handleChange}
              labelText="Password"
              placeholder="Password"
            />
          </div>

          <div className={styles.wrapper}>
            <InputText
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              handleChange={handleChange}
              labelText="Confirm Password"
              placeholder="Confirm Password"
            />
          </div>

          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </Modal>
    )) ||
    null
  );
}
