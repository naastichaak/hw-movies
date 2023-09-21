import styles from "./SharedLayout.module.css";

import { Outlet, NavLink } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>{" "}
        <br />
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Movies
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
export default SharedLayout;
