import { useState } from "react";
import styles from "./Hamburger.module.css";
import MenuItem from "./MenuItem";

function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.hamburgerContainer}>
      <div className={styles.hamburger}>
        <header>
          <span>
            <img src="/icon.png" alt="icon" />
          </span>
          <p>CodeAnt AI</p>
        </header>
        <button onClick={() => setOpen(!open)}>
          <img src="/hamburger.png" alt="hamburger" />
        </button>
      </div>
      {/* Overlay background */}
      <div
        className={`${styles.overlay} ${open ? styles.active : ""}`}
        onClick={() => setOpen(!open)}
      ></div>
      
      <div className={`${styles.dropdownMenu} ${open ? styles.open : ""}`}>
        <select className={styles.select}>
          <option>Username</option>
        </select>
        <ul className={styles.menu}>
          <MenuItem
            to="/dashboard/repositories"
            src="/home.png"
            alt="home"
            hoverSrc="/home-white.png"
          >
            Repositories
          </MenuItem>
          <MenuItem to="" src="/code.png" alt="code" hoverSrc="/code-white.png">
            AI Code Review
          </MenuItem>
          <MenuItem
            to=""
            src="/cloud.png"
            alt="cloud"
            hoverSrc="/cloud-white.png"
          >
            Cloud Security
          </MenuItem>
          <MenuItem to="" src="/book.png" alt="book" hoverSrc="/book-white.png">
            How to use
          </MenuItem>
          <MenuItem to="" src="/gear.png" alt="gear" hoverSrc="/gear-white.png">
            Settings
          </MenuItem>
          <MenuItem
            to=""
            src="/phone.png"
            alt="phone"
            hoverSrc="/phone-white.png"
          >
            Support
          </MenuItem>
          <MenuItem
            to="/signin"
            src="/sign-out.png"
            alt="signout"
            hoverSrc="/sign-out-white.png"
          >
            Logout
          </MenuItem>
        </ul>
      </div>
    </div>
  );
}

export default Hamburger;
