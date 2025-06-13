import css from "./CarList.module.css";
import CarItem from "../CarItem/CarItem";

export default function CarList() {
  return (
    <ul className={css.carList}>
      <li>
        <CarItem />
      </li>
      <li>
        <CarItem />
      </li>
      <li>
        <CarItem />
      </li>
      <li>
        <CarItem />
      </li>
      <li>
        <CarItem />
      </li>
      <li>
        <CarItem />
      </li>
      <li>
        <CarItem />
      </li>
      <li>
        <CarItem />
      </li>
    </ul>
  );
}
