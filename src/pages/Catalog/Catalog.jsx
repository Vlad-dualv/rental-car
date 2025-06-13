import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { selectError, selectLoading } from "../../redux/cars/slice";
import CarList from "../../components/CarList/CarList";
import css from "./Catalog.module.css";

export default function Catalog() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <section className={css.catalogSection}>
      {isLoading && <p>Loading cars...</p>}
      {error && <p>{error}</p>}
      <CarList />
      <button type="button" className={css.loadButton}>
        Load more
      </button>
    </section>
  );
}
