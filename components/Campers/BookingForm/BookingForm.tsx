"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { createBookingReq } from "@/lib/api";

import css from "./BookingForm.module.css";

interface BookingFormProps {
  camperId: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Please enter your name")
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long"),

  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email."),
});

export default function BookingForm({ camperId }: BookingFormProps) {
  const initialValues = {
    name: "",
    email: "",
  };

  const handleSubmit = async (values: typeof initialValues) => {
    await createBookingReq(camperId, values);
  };

  return (
    <div className={css.bookingForm}>
      <div className={css.titleWrapper}>
        <h3 className={css.bookingTitle}>Book your campervan now</h3>
        <p className={css.supportingText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            name="name"
            type="text"
            placeholder="Name*"
            required
            className={css.formInput}
          />
          <ErrorMessage name="email" component="p" className={css.error} />

          <Field
            name="email"
            type="email"
            placeholder="Email*"
            required
            className={css.formInput}
          />
          <ErrorMessage name="email" component="p" className={css.error} />

          <button type="submit" className={css.sendButton}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
