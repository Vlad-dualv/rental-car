import { selectCars, selectLoading, selectError } from "../../redux/cars/slice";
import css from "./CarDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarById } from "../../redux/cars/operations";

export default function CarDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const cars = useSelector(selectCars);
  const car = cars.find((car) => car.id === id);

  useEffect(() => {
    if (!car) {
      dispatch(fetchCarById(id));
    }
  }, [car, dispatch, id]);
  if (!car) {
    return <p>Car not found</p>;
  }
  return (
    <section className={css.carDetailsSection}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        <img src={car.img} alt="car image" width={640} />
        <form action=""></form>
      </div>
      <div>
        <div>
          <h2>
            {car.brand} {car.model}, {car.year}
          </h2>
          <div>
            <p>{car.address}</p>
            <p>{car.mileage} km</p>
          </div>
          <h2>${car.rentalPrice}</h2>
          <p></p>
        </div>
      </div>
    </section>
  );
}
