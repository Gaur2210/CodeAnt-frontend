import styles from "./LeftSection.module.css";
import Data from "./Data";
import Statistics from "./Statistics";

function LeftSection() {
  return (
    <div className={styles.left}>
      <div className="leftContainer">
        <Data />
        <Statistics />
      </div>
      <img src="/logo.png" alt="logo" className={styles.logo} />
    </div>
  );
}

export default LeftSection;
