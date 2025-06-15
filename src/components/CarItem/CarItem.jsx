import css from "./CarItem.module.css";

export default function CarItem({ car }) {
  return (
    <div className={css.carItem}>
      <div className={css.carDescription}>
        <img
          src={car.img}
          alt="car image"
          width={275}
          height={268}
          className={css.carImage}
        />
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
          <span>{car.mileage} km</span>
        </p>
      </div>
      <button type="button" className={css.carButton}>
        Read more
      </button>
    </div>
  );
}
