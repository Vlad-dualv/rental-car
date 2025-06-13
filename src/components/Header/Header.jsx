import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <p className={css.logo}>
          Rental<span className={css.accentColor}>Car</span>
        </p>
        <nav className={css.nav}>
          <NavLink to="/" className={css.headerLink}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={css.headerLink}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
