import { NavLink, useLocation } from "react-router-dom";
import styles from "./MenuItem.module.css";
import { useState } from "react";

function MenuItem({ hoverSrc, src, alt, to, children }) {
  const [imageSrc, setImageSrc] = useState(src);
  const location = useLocation();
  
  const isActive = location.pathname === to;

  const currentImageSrc = isActive ? hoverSrc : imageSrc;

  return (
    <li
      className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
      onMouseEnter={() => !isActive && setImageSrc(hoverSrc)} 
      onMouseLeave={() => !isActive && setImageSrc(src)}
    >
      <img src={currentImageSrc} alt={alt} />
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}

export default MenuItem;
