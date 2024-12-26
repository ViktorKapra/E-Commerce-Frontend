import FormInputText from "@/elements/controls/formInputText";
import Modal from "@/elements/modal/modal";
import { signUpUser } from "@/api/auth";
import { useAuth } from "@/helpers/context/authContext";
import { Field, FormProvider, RegisterOptions, useForm } from "react-hook-form";
import NONE_AUTHENTICATED_USER from "@/helpers/constants";
import { emailValidation, passwordValidation } from "@/helpers/formValidation";
import { useNavigate } from "react-router";
import { USER_PAGE } from "@/routing/links";
import { useSignUp } from "@/helpers/context/signUpContext";
import * as styles from "./signUp.m.scss";

export default function SignUpModal() {
  const { authenticatedUser, setAuthenticatedUser } = useAuth();
  const { isSignUpModalInOpen: isOpened, setIsSignUpModalOpen: setIsOpened } = useSignUp();

  const navigate = useNavigate();
  const methods = useForm();

  const password: Field = methods.watch("password");

  const confirmPasswordValidation: RegisterOptions = {
    required: "Please confirm your password",
    validate: (value: Field) => {
      return value === password || "Passwords do not match";
    },
  };

  const handleUnsuccessfulClose = () => {
    methods.reset();
    setIsOpened(false);
  };

  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);

    console.error(data);
    const resultPromise = signUpUser(data.email, data.password);
    resultPromise
      .then((result) => {
        if (result) {
          console.log("Sign-Up is successful!");
          setIsOpened(false);
          setAuthenticatedUser(data.email);
          methods.reset();
          navigate(USER_PAGE);
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
              <h1 className={styles.h1}>Registration</h1>
            </div>
            <div className={styles.wrapper}>
              <FormInputText id="email" placeholder="Username" labelText="Login" validation={emailValidation} />
            </div>
            <div className={styles.wrapper}>
              <FormInputText id="password" type="password" labelText="Password" placeholder="Password" validation={passwordValidation} />
            </div>

            <div className={styles.wrapper}>
              <FormInputText
                id="confirmPassword"
                type="password"
                labelText="Confirm Password"
                placeholder="Confirm Password"
                validation={confirmPasswordValidation}
              />
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
