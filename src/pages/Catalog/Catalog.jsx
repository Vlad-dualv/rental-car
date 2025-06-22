import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import {
  selectError,
  selectLoading,
  selectPage,
  selectTotalPages,
} from "../../redux/cars/slice";
import CarList from "../../components/CarList/CarList";
import css from "./Catalog.module.css";
import Loader from "../../components/Loader/Loader";
import SearchForm from "../../components/SearchForm/SearchForm";

export default function Catalog() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

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
        <CarList />
        {page < totalPages && (
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
