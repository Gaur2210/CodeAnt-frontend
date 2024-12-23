import { Outlet } from "react-router-dom";
import styles from "./RightSection.module.css";
import icon from "/icon.png";
import SigninNav from "./SigninNav";

function RightSection() {
  return (
    <div className={styles.right}>
      <div className={styles.rightContainer}>
        <div className={styles.topContainer}>
          <div className={styles.header}>
            <header>
              <span>
                <img src={icon} alt="icon" />
              </span>
              <p>CodeAnt AI</p>
            </header>
            <p className={styles.welcome}>Welcome to CodeAnt AI</p>
          </div>
          <SigninNav />
        </div>
        <Outlet />
      </div>
      <p>
        By signing up you agree to the <strong>Privacy Policy</strong>.
      </p>
    </div>
  );
}

export default RightSection;
