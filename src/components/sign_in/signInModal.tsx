import InputText from "@/elements/controls/inputText";
import { ChangeEvent, FormEvent, useState } from "react";
import Modal from "@/elements/modal/modal";
import { isValidEmail, isValidPassword } from "@/helpers/validation";
import { signInUser } from "@/api/auth";
import * as styles from "./signInModal.m.scss";

export default function SignInModal({
  authenticatedUser,
  setAuthenticatedUser,
  isOpened,
  setIsOpened,
}: {
  authenticatedUser: string;
  setAuthenticatedUser: (value: string) => void;
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    validationMassage += !isValidPassword(formData.password) ? "Invalid password\n" : "";
    return validationMassage;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationMassage = generateValidationMessage();
    if (validationMassage !== "") {
      alert(validationMassage);
      return;
    }

    const resultPromise = signInUser(formData.email, formData.password);
    resultPromise
      .then((result) => {
        if (result) {
          setAuthenticatedUser(formData.email);
          console.log("Signed in successfully!");
          setIsOpened(false);
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
            <h1 className={styles.h1}>Authorization</h1>
          </div>
          <div className={styles.wrapper}>
            <InputText
              id="email"
              name="email"
              value={formData.email}
              handleChange={handleChange}
              placeholder="Username"
              labelText="Email"
            />
          </div>
          <div className={styles.wrapper}>
            <InputText
              id="password"
              name="password"
              value={formData.password}
              handleChange={handleChange}
              placeholder="Password"
              labelText="Password"
            />
          </div>
          <button className={styles.submitButton} type="submit">
            Sign In
          </button>
        </form>
      </Modal>
    )) ||
    null
  );
}
