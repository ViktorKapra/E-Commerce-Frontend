import Form from "@/elements/form";
import PasswordControl from "@/elements/controls/password";
import ModalWUP from "@/elements/modal/wupModal";
import changePassword from "@/api/profile";
import * as styles from "./changePasswordModal.m.scss";

export default function ChangePasswordModal() {
  const submitForm = (ev: WUP.Form.EventMap["$submit"]) => {
    if (ev.detail.relatedForm.$isValid) {
      const { password } = ev.detail.model;
      changePassword(password).then((r) => (r ? console.log("Password changed") : alert("Unable to change password")));
    } else {
      ev.preventDefault();
    }
  };

  return (
    <ModalWUP className={styles.wupModal}>
      <Form onSubmit={submitForm}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}> Change password</h2>
          <div className={styles.container}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles.label}> Password</label>
            <PasswordControl
              className={styles.password}
              name="password"
              validations={{ required: true, min: 8, minNumber: 1, minUpper: 1, minLower: 1 }}
            />
          </div>
          <div className={styles.container}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles.label}> Repeat Password</label>
            <PasswordControl name="repeatPassword" validations={{ confirm: true, required: true }} />
          </div>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </div>
      </Form>
    </ModalWUP>
  );
}
