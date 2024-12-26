import { FieldErrors } from "react-hook-form";

export default function findInputError(err: FieldErrors, name: string): FieldErrors {
  return Object.keys(err)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: err[key] });
    }, {});
}
