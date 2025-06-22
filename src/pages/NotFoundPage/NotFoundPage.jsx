import css from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main>
      <div className={css.notFoundPageContainer}>
        <h1>Page not found</h1>
        <Link to="/">Home Page</Link>
      </div>
    </main>
  );
}
