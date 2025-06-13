import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";

export default function Header() {
  const linkStyle = ({ isActive }) => {
    return clsx(css.nav, isActive && css.active);
  };

  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <p className={css.logo}>
          Rental<span className={css.accentColor}>Car</span>
        </p>
        <nav className={css.nav}>
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={linkStyle}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
