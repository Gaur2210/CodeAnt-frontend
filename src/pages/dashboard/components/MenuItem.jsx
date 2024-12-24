import { NavLink, useLocation } from "react-router-dom";
import styles from "./MenuItem.module.css";

function MenuItem({ hoverSrc, src, alt, to, children }) {
  const location = useLocation();

  const isActive = location.pathname === to;

  const currentImageSrc = isActive ? hoverSrc : src;

  return (
    <li className={`${styles.menuItem} ${isActive ? styles.active : ""}`}>
      <img src={currentImageSrc} alt={alt} />
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}

export default MenuItem;
