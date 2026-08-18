import { ErrorMessage, Field } from "formik";
import { MdErrorOutline } from "react-icons/md";

import { formatText } from "@/components/utils/formatLabel";

import css from "./BookingFormField.module.css";

interface BookingFormFieldProps {
  name: "name" | "email";
  type: "text" | "email";
  value: string;
  error?: string;
  touched?: boolean;
}

export default function BookingFormField({
  name,
  type,
  value,
  error,
  touched,
}: BookingFormFieldProps) {
  const hasError = error && touched;

  return (
    <div>
      <div className={css.formField}>
        <Field
          name={name}
          type={type}
          placeholder={`${formatText(name)}*`}
          required
          className={`${css.formInput} ${hasError ? css.inputError : ""}`}
        />
        {value && hasError && (
          <span className={css.formLabel}>{`${formatText(name)}*`}</span>
        )}
        {hasError && <MdErrorOutline className={css.errorIcon} />}
      </div>
      <ErrorMessage name={name} component="span" className={css.errorMessage} />
    </div>
  );
}
