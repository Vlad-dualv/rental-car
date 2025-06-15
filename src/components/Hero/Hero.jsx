import css from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  function goToCatalog() {
    navigate("/catalog");
  }
  return (
    <section className={css.heroSection}>
      <div className={css.heroContainer}>
        <h1>Find your perfect rental car</h1>
        <h2>Reliable and budget-friendly rentals for any journey</h2>
        <button type="button" className={css.heroButton} onClick={goToCatalog}>
          View catalog
        </button>
      </div>
    </section>
  );
}
