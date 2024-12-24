import styles from "./Navbar.module.css";
import data from "../../../../data/repositories.json";

function Navbar() {
  const numRepo = data.length;

  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <h2>Repositories</h2>
        <p>{numRepo} total repositories</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.refresh}>
          <div className={styles.refreshContainer}>
            <img src="/refresh.png" alt="refresh" />
            <span>Refresh All</span>
          </div>
        </button>
        <button className={styles.add}>
          <div className={styles.addContainer}>
          <img src="/plus.png" alt="plus" />
          <span>Add Repository</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
