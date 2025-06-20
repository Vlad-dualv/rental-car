import { Formik, Field, Form } from "formik";
import css from "./SearchForm.module.css";
import { useId } from "react";
import clsx from "clsx";

export default function SearchForm() {
  const iconArrowDown = "/sprite.svg#icon-arrowdown";
  const iconArrowUp = "/sprite.svg#icon-arrowup";
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
          <div className={css.selectWrapper}>
            <Field
              as="select"
              name="brand"
              id={brandFieldId}
              className={clsx(css.searchInput, css.brandInput)}
            >
              <option value="" disabled selected hidden>
                Choose brand
              </option>
            </Field>
            <svg aria-label="dropdown icon" className={css.selectIcon}>
              <use href={iconArrowDown}></use>
            </svg>
          </div>
        </div>
        <div className={css.searchFieldContainer}>
          <label htmlFor="priceFieldId" className={css.label}>
            Price / 1 hour
          </label>
          <div className={css.selectWrapper}>
            <Field
              as="select"
              name="price"
              id={priceFieldId}
              className={clsx(css.searchInput, css.priceInput)}
            >
              <option
                value=""
                disabled
                selected
                hidden
                className={css.optionPlaceholder}
              >
                Choose a price
              </option>
            </Field>
            <svg aria-label="dropdown icon" className={css.selectIcon}>
              <use href={iconArrowDown}></use>
            </svg>
          </div>
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
              className={clsx(css.searchInput, css.mileageFieldFrom)}
              placeholder="From"
            ></Field>
            <Field
              type="number"
              name="mileageTo"
              id={mileageFieldToId}
              className={clsx(css.searchInput, css.mileageFieldTo)}
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
