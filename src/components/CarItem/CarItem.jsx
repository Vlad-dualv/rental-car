import clsx from "clsx";
import css from "./CarItem.module.css";
import { useNavigate } from "react-router-dom";

export default function CarItem({ car }) {
  const iconHearth = "/symbol-defs.svg#icon-Vector-2";
  const activeHearth = "/symbol-defs.svg#icon-Vector-1";
  const navigate = useNavigate();
  function goToCarDetails() {
    navigate(`/catalog/${car.id}`);
  }

  return (
    <div className={css.carItem}>
      <div className={css.carDescription}>
        <div className={css.imageWrapper}>
          <img
            src={car.img}
            alt="car image"
            width={275}
            height={268}
            className={css.carImage}
          />

          <svg className={css.icon} aria-label="hearth icon">
            <use href={iconHearth}></use>
          </svg>
        </div>

        <div className={css.mainInfo}>
          <p>
            {car.brand} <span className={css.carModel}>{car.model}</span>,{" "}
            {car.year}
          </p>
          <p>${car.rentalPrice}</p>
        </div>
        <p className={css.carLocation}>
          <span>{car.address.split(", ")[1]}</span>
          <span>{car.address.split(", ")[2]}</span>
          <span>{car.rentalCompany}</span>
        </p>
        <p className={css.carStats}>
          <span>{car.type}</span>
          <span>{car.mileage.toLocaleString("uk-UA")} km</span>
        </p>
      </div>
      <button type="button" className={css.carButton} onClick={goToCarDetails}>
        Read more
      </button>
    </div>
  );
}
