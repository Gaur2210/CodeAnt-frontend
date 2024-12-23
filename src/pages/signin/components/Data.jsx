import styles from "./Data.module.css";

function Data() {
  return (
    <div className={styles.dataContainer}>
      <header>
        <span>
          <img src="/icon.png" alt="icon" />
        </span>
        <p>AI to Detect & Autofix Bad Code</p>
      </header>
      <hr />
      <ul className={styles.data}>
        <li>
          <p>
            <strong>30+</strong>
          </p>
          <p className={styles.dataType}>Language Support</p>
        </li>
        <li>
          <p>
            <strong>10K+</strong>
          </p>
          <p className={styles.dataType}>Developers</p>
        </li>
        <li>
          <p>
            <strong>100K+</strong>
          </p>
          <p className={styles.dataType}>Hours Saved</p>
        </li>
      </ul>
    </div>
  );
}

export default Data;
