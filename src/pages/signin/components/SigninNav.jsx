import { NavLink } from "react-router-dom";
import styles from "./SigninNav.module.css";

function SigninNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <NavLink
          to="/signin/saas"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          SAAS
        </NavLink>
        <NavLink
          to="/signin/self-hosted"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Self Hosted
        </NavLink>
      </ul>
    </div>
  );
}

export default SigninNav;
