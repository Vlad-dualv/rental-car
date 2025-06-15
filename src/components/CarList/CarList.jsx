import css from "./CarList.module.css";
import { useSelector } from "react-redux";
import CarItem from "../CarItem/CarItem";
import { selectCars } from "../../redux/cars/slice";

export default function CarList() {
  const cars = useSelector(selectCars);

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
