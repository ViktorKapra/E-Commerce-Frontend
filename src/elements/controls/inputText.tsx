import { ChangeEvent } from "react";

export default function InputText({
  id,
  name,
  handleChange,
  value,
  labelText,
  placeholder = "",
}: {
  id: string;
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText: string;
  placeholder: string;
}) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} value={value} onChange={handleChange} type="text" name={name} placeholder={placeholder} />
    </>
  );
}
