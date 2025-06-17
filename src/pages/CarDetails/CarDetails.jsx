import { selectCars, selectLoading, selectError } from "../../redux/cars/slice";
import css from "./CarDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarById } from "../../redux/cars/operations";
import OrderForm from "../../components/OrderForm/OrderForm";

export default function CarDetails() {
  const iconLocation = "../../../public/sprite.svg#icon-location";
  const iconCheck = "../../../public/sprite.svg#icon-check-circle";
  const iconCar = "../../../public/sprite.svg#icon-car";
  const iconFuel = "../../../public/sprite.svg#icon-fuel-pump";
  const iconGear = "../../../public/sprite.svg#icon-gear";
  const iconCalendar = "../../../public/sprite.svg#icon-calendar";
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

      <div className={css.leftSide}>
        <img src={car.img} alt="car image" width={640} />
        <OrderForm />
      </div>
      <div className={css.rightSide}>
        <div className={css.brandAndId}>
          <h2>
            {car.brand} {car.model}, {car.year}
          </h2>
          <p className={css.carId}>Id: {car.id.slice(0, 4)}</p>
        </div>
        <div className={css.locationAndMileage}>
          <svg className={css.icon} aria-label="location icon">
            <use href={iconLocation}></use>
          </svg>
          <p>{car.address.split(", ").slice(1).join(", ")}</p>
          <p>Mileage: {car.mileage.toLocaleString("uk-UA")} km</p>
        </div>
        <h2 className={css.price}>${car.rentalPrice}</h2>
        <p>{car.description}</p>
        <div className={css.carInfo}>
          <div>
            <h3>Rental Conditions:</h3>
            <ul>
              {car.rentalConditions.map((condition, index) => (
                <li key={index}>
                  <svg className={css.icon}>
                    <use href={iconCheck}></use>
                  </svg>
                  {condition}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Car Specifications:</h3>
            <ul>
              <li>
                <svg className={css.icon}>
                  <use href={iconCalendar}></use>
                </svg>
                Year: {car.year}
              </li>
              <li>
                <svg className={css.icon}>
                  <use href={iconCar}></use>
                </svg>
                Type: {car.type}
              </li>
              <li>
                <svg className={css.icon}>
                  <use href={iconFuel}></use>
                </svg>
                Fuel Consumption: {car.fuelConsumption}
              </li>
              <li>
                <svg className={css.icon}>
                  <use href={iconGear}></use>
                </svg>
                Engine Size: {car.engineSize}
              </li>
            </ul>
          </div>
          <div>
            <h3>Accessories and functionalities:</h3>
            <ul>
              {car.accessories.map((accessory, index) => (
                <li key={index}>
                  <svg className={css.icon}>
                    <use href={iconCheck}></use>
                  </svg>
                  {accessory}
                </li>
              ))}
              {car.functionalities.map((functionality, index) => (
                <li key={index}>
                  <svg className={css.icon}>
                    <use href={iconCheck}></use>
                  </svg>
                  {functionality}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
