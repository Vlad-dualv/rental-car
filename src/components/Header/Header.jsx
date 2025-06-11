import { NavLink } from "react-router-dom";
//import css from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </nav>
    </header>
  );
}
