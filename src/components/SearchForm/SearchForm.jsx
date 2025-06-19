import { Formik, Field, Form } from "formik";
import css from "./SearchForm.module.css";
import { useId } from "react";

export default function SearchForm() {
  const brandFieldId = useId();
  const priceFieldId = useId();
  const mileageFieldFromId = useId();
  const mileageFieldToId = useId();
  return (
    <Formik
      initialValues={{
        brand: "",
        price: "",
        mileageFrom: "",
        mileageTo: "",
      }}
    >
      <Form className={css.searchForm}>
        <div className={css.searchFieldContainer}>
          <label htmlFor="brandFieldId" className={css.label}>
            Car brand
          </label>
          <Field
            as="select"
            name="brand"
            id={brandFieldId}
            className={css.searchInput}
          >
            <option value="" disabled selected hidden>
              Choose brand
            </option>
          </Field>
        </div>
        <div className={css.searchFieldContainer}>
          <label htmlFor="priceFieldId" className={css.label}>
            Price / 1 hour
          </label>
          <Field
            as="select"
            name="price"
            id={priceFieldId}
            className={css.searchInput}
          >
            <option value="" disabled selected hidden>
              Choose a price
            </option>
          </Field>
        </div>
        <div className={css.searchFieldContainer}>
          <label htmlFor="mileageFieldId" className={css.label}>
            Car mileage / km
          </label>
          <div className={css.searchMileageContainer}>
            <Field
              type="number"
              name="mileageFrom"
              id={mileageFieldFromId}
              className={css.searchInput}
              placeholder="From"
            ></Field>
            <Field
              type="number"
              name="mileageTo"
              id={mileageFieldToId}
              className={css.searchInput}
              placeholder="To"
            ></Field>
          </div>
        </div>

        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </Form>
    </Formik>
  );
}
