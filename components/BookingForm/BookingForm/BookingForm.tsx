"use client";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import toast from "react-hot-toast";

import { createBookingReq } from "@/lib/api";
import BookingFormField from "../BookingFormField/BookingFormField";

import css from "./BookingForm.module.css";

interface BookingFormProps {
  camperId: string;
}

const initialValues = {
  name: "",
  email: "",
};

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
  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const response = await createBookingReq(camperId, values);

      toast.success(response.message, {
        style: {
          border: "1px solid var(--link-primary-hover)",
          padding: "16px",
          color: "var(--text-primary)",
        },
        iconTheme: {
          primary: "var(--link-primary-hover)",
          secondary: "var(--white)",
        },
        duration: 3000,
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
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
        {({ values, errors, touched, isSubmitting }) => (
          <Form>
            <div className={css.formFields}>
              <BookingFormField
                name="name"
                type="text"
                value={values.name}
                error={errors.name}
                touched={touched.name}
              />

              <BookingFormField
                name="email"
                type="email"
                value={values.email}
                error={errors.email}
                touched={touched.email}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || Object.keys(errors).length > 0}
              className={css.sendButton}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
