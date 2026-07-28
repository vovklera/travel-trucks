import css from "./FiltersRadio.module.css";

type Option<T extends string> = {
  label: string;
  value: T;
};

type FilterRadioProps<T extends string> = {
  title: string;
  name: string;
  options: Option<T>[];
  // value: T | "";
  // onChange: (value: T) => void;
};

export default function FilterRadio<T extends string>({
  title,
  name,
  options,
  // value,
  // onChange,
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
            // checked={value === option.value}
            // onChange={() => onChange(option.value)}
            className={css.radio}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
}

{
  /* <div className={css.filters}>
            <h2 className={css.filtersTitle}>Filters</h2>
            <div>
              <p className={css.filterText}>Camper form</p>
              <div className={css.radioWrapper}>
                {filters.forms.map((formItem) => (
                  <label key={formItem} className={css.radioContent}>
                    <input
                      type="radio"
                      name="form"
                      value={formItem}
                      className={css.radio}
                    />
                    <p>{formItem}</p>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className={css.filterText}>Engine</p>
              <div className={css.radioWrapper}>
                {filters.engines.map((engineItem) => (
                  <label key={engineItem} className={css.radioContent}>
                    <input
                      type="radio"
                      name="engine"
                      value={engineItem}
                      className={css.radio}
                    />
                    <p>{engineItem}</p>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className={css.filterText}>Transmission</p>
              <div className={css.radioWrapper}>
                {filters.transmissions.map((transmissionItem) => (
                  <label key={transmissionItem} className={css.radioContent}>
                    <input
                      type="radio"
                      name="transmission"
                      value={transmissionItem}
                      className={css.radio}
                    />
                    <p>{transmissionItem}</p>
                  </label>
                ))}
              </div>
            </div>
          </div>*/
}
