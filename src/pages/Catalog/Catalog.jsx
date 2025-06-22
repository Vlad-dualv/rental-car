import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import {
  selectError,
  selectLoading,
  selectPage,
  selectTotalPages,
} from "../../redux/cars/slice";
import { selectCars } from "../../redux/cars/slice";
import {
  selectBrand,
  selectPrice,
  selectMileage,
} from "../../redux/filters/selectors";
import CarList from "../../components/CarList/CarList";
import css from "./Catalog.module.css";
import Loader from "../../components/Loader/Loader";
import SearchForm from "../../components/SearchForm/SearchForm";
import { setBrand, setMileage, setPrice } from "../../redux/filters/slice";

export default function Catalog() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const cars = useSelector(selectCars);
  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);
  const mileage = useSelector(selectMileage);

  const filteredCars = cars.filter((car) => {
    const matchesBrand = brand ? car.brand === brand : true;
    const matchesPrice = price
      ? Number(car.rentalPrice.replace("$", "")) <= Number(price)
      : true;
    const matchesMileageFrom = mileage.from
      ? car.mileage >= Number(mileage.from)
      : true;
    const matchesMileageTo = mileage.to
      ? car.mileage <= Number(mileage.to)
      : true;
    return (
      matchesBrand && matchesPrice && matchesMileageFrom && matchesMileageTo
    );
  });

  const hasFethced = !isLoading && (cars.length > 0 || page > 1);

  useEffect(() => {
    return () => {
      dispatch(setMileage(""));
      dispatch(setPrice(""));
      dispatch(setBrand(""));
    };
  }, []);

  useEffect(() => {
    dispatch(fetchCars(1));
  }, [dispatch]);

  function handleLoadMore() {
    dispatch(fetchCars(page + 1));
  }

  return (
    <main>
      <section className={css.catalogSection}>
        <SearchForm />
        <CarList cars={filteredCars} hasFetched={hasFethced} />
        {filteredCars.length > 0 && page < totalPages && (
          <button
            type="button"
            className={css.loadButton}
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            Load more
          </button>
        )}

        {error && <p>{error}</p>}
      </section>
      {isLoading && <Loader />}
    </main>
  );
}
