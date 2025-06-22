import css from "./CarList.module.css";
import CarItem from "../CarItem/CarItem";

export default function CarList({ cars, hasFetched }) {
  if (hasFetched && cars.length === 0) {
    return (
      <h3 className={css.noCarsMessage}>
        Sorry, we don't have cars with these parameters.
      </h3>
    );
  }

  return (
    <ul className={css.carList}>
      {cars.map((car) => (
        <li key={car.id}>
          <CarItem car={car} />
        </li>
      ))}
    </ul>
  );
}
