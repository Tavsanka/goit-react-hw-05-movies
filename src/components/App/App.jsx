import React, { Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import styles from "./App.module.scss";

const Home = lazy(() => import("../../pages/Home/Home"));
const Movies = lazy(() => import("../../pages/Movies/Movies"));
const MovieDetails = lazy(
  () => import("../../pages/MovieDetails/MovieDetails"),
);
const Cast = lazy(() => import("../../pages/Cast/Cast"));
const Reviews = lazy(() => import("../../pages/Reviews/Reviews"));

const App = () => {
  return (
    <div className={styles.App}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }>
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }>
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />{" "}
          {/* This ensures fallback to Home */}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
