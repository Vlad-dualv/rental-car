import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { selectError, selectLoading } from "../../redux/cars/slice";

export default function Catalog() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading cars...</p>}
      {error && <p>{error}</p>}
      <h1>Cars</h1>
    </div>
  );
}
