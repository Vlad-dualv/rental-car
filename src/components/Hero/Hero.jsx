import css from "./Hero.module.css";

export default function Hero() {
  function handleClick() {
    window.location.href = "/catalog";
  }
  return (
    <section className={css.heroSection}>
      <div className={css.heroContainer}>
        <h1>Find your perfect rental car</h1>
        <h2>Reliable and budget-friendly rentals for any journey</h2>
        <button type="button" className={css.heroButton} onClick={handleClick}>
          View catalog
        </button>
      </div>
    </section>
  );
}
