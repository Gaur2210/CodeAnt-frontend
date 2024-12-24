import { useState } from "react";
import MenuItem from "./MenuItem";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <header>
          <span>
            <img src="/icon.png" alt="icon" />
          </span>
          <p>CodeAnt AI</p>
        </header>

        {/* Hamburger Button */}
        <button className={styles.hamburger} onClick={toggleSidebar}>
         <img src="/hamburger.png" alt="hamburger" />
        </button>

        {/* FullMenu */}
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
          <MenuItem
            to=""
            src="/code.png"
            alt="code"
            hoverSrc="/code-white.png"
          >
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
          <MenuItem
            to=""
            src="/book.png"
            alt="book"
            hoverSrc="/book-white.png"
          >
            How to use
          </MenuItem>
          <MenuItem
            to=""
            src="/gear.png"
            alt="gear"
            hoverSrc="/gear-white.png"
          >
            Settings
          </MenuItem>
        </ul>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.menu}>
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

export default Sidebar;
