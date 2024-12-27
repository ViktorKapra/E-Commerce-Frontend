import FormInputText from "@/elements/controls/formInputText";
import Modal from "@/elements/modal/modal";
import { signInUser } from "@/api/auth";
import { useNavigate } from "react-router";
import { useAuth } from "@/helpers/context/authContext";
import { HOME_PAGE } from "@/routing/links";
import { FormProvider, useForm } from "react-hook-form";
import NONE_AUTHENTICATED_USER from "@/helpers/constants";
import { emailValidation, passwordValidation } from "@/helpers/utils";
import { useSignIn } from "@/helpers/context/signInContext";
import * as styles from "./signInModal.m.scss";

export default function SignInModal() {
  const { authenticatedUser, setAuthenticatedUser } = useAuth();
  const { isSignInModalInOpen: isOpened, setIsSignInModalOpen: setIsOpened } = useSignIn();

  const navigate = useNavigate();

  const methods = useForm();

  const handleUnsuccessfulClose = () => {
    setIsOpened(false);
    methods.reset();
    navigate(HOME_PAGE);
  };

  const handleSubmit = methods.handleSubmit((data) => {
    const resultPromise = signInUser(data.email, data.password);
    resultPromise
      .then((result) => {
        if (result) {
          setIsOpened(false);
          setAuthenticatedUser(data.email);
          methods.reset();
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
              <FormInputText id="password" type="password" labelText="Password" placeholder="Password" validation={passwordValidation} />
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
