import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";
import findInputError from "@/helpers/findInputError";
import isFormInvalid from "@/helpers/isFormValid";
import clsx from "clsx";
import * as styles from "./formInputText.m.scss";

export default function FormInputText({
  id,
  labelText,
  placeholder = "",
  validation,
  type = "text",
}: {
  id: string;
  labelText: string;
  placeholder: string;
  validation: RegisterOptions<FieldValues, string> | undefined;
  type?: string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, id);
  const isInvalid = isFormInvalid(inputError);

  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {labelText}
      </label>
      <div className={styles.wrapper}>
        <input
          className={clsx(styles.input, { [styles.invalidInput]: isInvalid })}
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, validation)}
        />
        {isInvalid && <span className={styles.validationMessage}>{inputError.error?.message as string} </span>}
      </div>
    </>
  );
}
