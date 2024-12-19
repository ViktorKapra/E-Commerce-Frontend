import InputText from "@/elements/controls/inputText";
import { ChangeEvent, FormEvent, useState } from "react";
import Modal from "@/elements/modal/modal";
import { IsValidEmail, IsValidPassword } from "@/helpers/validation";
import CLOSE_ICON from "@/assets/images/icons/close.svg";
import * as styles from "./signUp.m.scss";

export default function SignUp({ isSignedIn, setIsSignIn }: { isSignedIn: boolean; setIsSignIn: (value: boolean) => void }) {
  const [isOpened, setIsOpened] = useState(true);
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
    window.location.replace("/");
    setIsOpened(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!IsValidEmail(formData.email) || !IsValidPassword(formData.password) || formData.password !== formData.confirmPassword) {
      alert("Invalid credentials!");
      return;
    }

    console.error(formData);
    setIsSignIn(true);
    setIsOpened(false);
    /* const resultPromise = signInUser(formData.email, formData.password);
    resultPromise
      .then((result) => {
        if (result) {
          setIsSignIn(true);
          console.log("Signed in successfully!");
          setIsOpened(false);
        } else {
          alert("Invalid credentials!");
          //handleUnsuccessfulClose();
        }
      })
      .catch((error: Error) => {
        console.error(error);
        //handleUnsuccessfulClose();
      });*/
  };

  return (
    (!isSignedIn && (
      <Modal open={isOpened} handleClose={handleUnsuccessfulClose}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.wrapper}>
            <h1 className={styles.h1}>Registration</h1>
            <button type="button" className={styles.closeButton} onClick={handleUnsuccessfulClose}>
              <img src={CLOSE_ICON} alt="Close" />
            </button>
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
