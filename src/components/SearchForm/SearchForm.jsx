import { Formik, Field, Form } from "formik";
import css from "./SearchForm.module.css";
import { useId, useState } from "react";
import clsx from "clsx";

export default function SearchForm() {
  const iconArrowDown = "/sprite.svg#icon-arrowdown";
  const iconArrowUp = "/sprite.svg#icon-arrowup";

  const brandFieldId = useId();
  const priceFieldId = useId();
  const mileageFieldFromId = useId();
  const mileageFieldToId = useId();

  const [focusedSelect, setFocusedSelect] = useState(null);

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
              onFocus={(e) => setFocusedSelect(e.target.name)}
              onBlur={() => setFocusedSelect(null)}
            >
              <option value="" disabled selected hidden>
                Choose brand
              </option>
            </Field>
            <svg aria-label="dropdown icon" className={css.selectIcon}>
              <use
                href={focusedSelect === "brand" ? iconArrowUp : iconArrowDown}
              ></use>
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
              onFocus={(e) => setFocusedSelect(e.target.name)}
              onBlur={() => setFocusedSelect(null)}
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
              <option value="30">$30</option>
              <option value="40">$40</option>
              <option value="50">$50</option>
              <option value="60">$60</option>
              <option value="70">$70</option>
              <option value="80">$80</option>
              <option value="90">$90</option>
              <option value="100">$100</option>
              <option value="110">$110</option>
              <option value="120">$120</option>
              <option value="130">$130</option>
              <option value="140">$140</option>
              <option value="150">$150</option>
            </Field>
            <svg aria-label="dropdown icon" className={css.selectIcon}>
              <use
                href={focusedSelect === "price" ? iconArrowUp : iconArrowDown}
              ></use>
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
