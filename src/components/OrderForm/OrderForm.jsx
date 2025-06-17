import { Formik, Form, Field } from "formik";
import css from "./OrderForm.module.css";
import clsx from "clsx";

export default function OrderForm() {
  return (
    <div className={css.orderContainer}>
      <h2>Book your car now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className={css.orderForm}>
          <Field
            type="text"
            name="username"
            placeholder="Name*"
            className={css.input}
            required
          />
          <Field
            type="email"
            name="email"
            placeholder="Email*"
            className={css.input}
            required
          />
          <Field
            type="text"
            name="date"
            placeholder="Booking date*"
            className={css.input}
            required
          />
          <Field
            type="text"
            name="comment"
            placeholder="Comment"
            className={clsx(css.input, css.commentInput)}
          />
          <button type="submit" className={css.orderButton}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
