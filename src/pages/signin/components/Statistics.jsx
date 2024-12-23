import styles from "./Statistics.module.css";

function Statistics() {
  return (
    <div className={styles.statistics}>
      <div className={styles.chart}>
        <div className={styles.piechart}>
          <img src="/piechart-outside.png" alt="piechart" />
          <img src="/piechart-inside.png" alt="piechart" />
        </div>
        <div className={styles.weekStats}>
          <span>↑ </span>
          <span>14%</span>
          <p>This week</p>
        </div>
      </div>
      <div className={styles.issues}>
        <p className={styles.issuesTitle}>Issues Fixed</p>
        <p className={styles.issuesNumber}>500K+</p>
      </div>
    </div>
  );
}

export default Statistics;
