import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "../Header/Header";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const CarDetails = lazy(() => import("../../pages/CarDetails/CarDetails"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
import "./App.css";
import Loader from "../Loader/Loader";

export default function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CarDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
