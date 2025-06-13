import css from "./CarItem.module.css";

export default function CarItem() {
  return (
    <div className={css.carItem}>
      <div className={css.carDescription}>
        <img
          src="src/images/heroimage.png.png"
          alt="car-image"
          width={275}
          height={268}
          className={css.carImage}
        />
        <div className={css.mainInfo}>
          <p>
            Buick <span className={css.carBrand}>Enclave</span>, 2008
          </p>
          <p>$40</p>
        </div>
        <p className={css.carLocation}>
          <span>Kiev</span>
          <span>Ukraine</span>
          <span>Luxury Car Rentals</span>
        </p>
        <p className={css.carStats}>
          <span>Suv</span>
          <span>9 582 km</span>
        </p>
      </div>
      <button type="button" className={css.carButton}>
        Read more
      </button>
    </div>
  );
}
