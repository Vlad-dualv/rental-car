import { Formik, Form, Field } from "formik";
import css from "./OrderForm.module.css";
import clsx from "clsx";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function OrderForm() {
  const initialValues = {
    username: "",
    email: "",
    date: "",
    comment: "",
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const commentFieldId = useId();

  function handleSubmit(values, actions) {
    toast.success("Car booked!");
    actions.resetForm();
  }
  return (
    <div className={css.orderContainer}>
      <h2>Book your car now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.orderForm}>
          <Field
            type="text"
            name="username"
            placeholder="Name*"
            className={css.input}
            id={nameFieldId}
            required
          />
          <Field
            type="email"
            name="email"
            placeholder="Email*"
            className={css.input}
            id={emailFieldId}
            required
          />
          <Field
            type="text"
            name="date"
            placeholder="Booking date*"
            className={css.input}
            id={dateFieldId}
            required
          />
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={clsx(css.input, css.commentInput)}
            id={commentFieldId}
            rows="5"
          />
          <button type="submit" className={css.orderButton}>
            Send
          </button>
        </Form>
      </Formik>
      <div className={css.toastWrapper}>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            success: {
              iconTheme: {
                primary: "#3470ff",
                secondary: "white",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
