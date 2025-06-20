import css from "./CarList.module.css";
import { useSelector } from "react-redux";
import CarItem from "../CarItem/CarItem";
import { selectCars } from "../../redux/cars/slice";
import {
  selectBrand,
  selectPrice,
  selectMileage,
} from "../../redux/filters/selectors";

export default function CarList() {
  const cars = useSelector(selectCars);
  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);
  const mileage = useSelector(selectMileage);

  const filteredCars = cars.filter((car) => {
    const matchesBrand = brand ? car.brand === brand : true;
    const matchesPrice = price
      ? Number(car.rentalPrice.replace("$", "")) <= Number(price)
      : true;
    const matchesMileage = mileage ? car.mileage <= Number(mileage) : true;
    return matchesBrand && matchesPrice && matchesMileage;
  });

  if (filteredCars.length === 0) {
    return (
      <p className={css.noCarsMessage}>
        Sorry, we don't have cars with these parameters.
      </p>
    );
  }

  return (
    <ul className={css.carList}>
      {filteredCars.map((car) => (
        <li key={car.id}>
          <CarItem car={car} />
        </li>
      ))}
    </ul>
  );
}
