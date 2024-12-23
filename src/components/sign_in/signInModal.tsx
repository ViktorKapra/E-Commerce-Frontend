import FormInputText from "@/elements/controls/formInputText";
import { useContext } from "react";
import Modal from "@/elements/modal/modal";
import { signInUser } from "@/api/auth";
import { useNavigate } from "react-router";
import { AuthContext } from "@/helpers/context/authContext";
import { FormProvider, useForm } from "react-hook-form";
import NONE_AUTHENTICATED_USER from "@/helpers/constants";
import { emailValidation, passwordValidation } from "@/helpers/formValidation";
import * as styles from "./signInModal.m.scss";

export default function SignInModal() {
  const {
    authenticatedUser,
    setAuthenticatedUser,
    isSignInModalOpened: isOpened,
    setIsSignInModalOpened: setIsOpened,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const methods = useForm();

  const handleUnsuccessfulClose = () => {
    setIsOpened(false);
    methods.reset();
    navigate("/");
  };

  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);

    console.error(data);
    const resultPromise = signInUser(data.email, data.password);
    resultPromise
      .then((result) => {
        if (result) {
          console.log("Sign-In is successful!");
          setIsOpened(false);
          setAuthenticatedUser(data.email);
        } else {
          alert("Invalid credentials!");
        }
      })
      .catch((error: Error) => {
        console.error(error);
      });
  });

  return (
    authenticatedUser === NONE_AUTHENTICATED_USER && (
      <FormProvider {...methods}>
        <Modal open={isOpened} handleClose={handleUnsuccessfulClose}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.wrapper}>
              <h1 className={styles.h1}>Authorization</h1>
            </div>
            <div className={styles.wrapper}>
              <FormInputText id="email" placeholder="Username" labelText="Login" validation={emailValidation} />
            </div>
            <div className={styles.wrapper}>
              <FormInputText id="password" labelText="Password" placeholder="Password" validation={passwordValidation} />
            </div>
            <button className={styles.submitButton} type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </Modal>
      </FormProvider>
    )
  );
}
