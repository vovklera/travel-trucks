import css from "./FiltersRadio.module.css";

type Option<T extends string> = {
  label: string;
  value: T;
};

type FilterRadioProps<T extends string> = {
  title: string;
  name: string;
  options: Option<T>[];
  value: T | "";
  onChange: (value: T) => void;
};

export default function FilterRadio<T extends string>({
  title,
  name,
  options,
  value,
  onChange,
}: FilterRadioProps<T>) {
  return (
    <fieldset className={css.radioWrapper}>
      <legend className={css.filterText}>{title}</legend>
      {options.map((option) => (
        <label key={option.value} className={css.radioContent}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className={css.radio}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
}
