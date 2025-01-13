import { useId } from "react";

export default function FilterRadioButton({
  value,
  checked,
  name,
  label,
  onChange,
}: {
  value: string;
  checked: boolean;
  name: string;
  label: string;
  onChange: () => void;
}) {
  const id = useId();
  return (
    <label htmlFor={id}>
      {label}
      <input type="radio" id={id} name={name} value={value} checked={checked} onChange={onChange} />
    </label>
  );
}
