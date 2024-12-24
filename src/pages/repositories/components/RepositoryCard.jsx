import styles from "./RepositoryCard.module.css";

function RepositoryCard({ repository }) {
  return (
    <li className={styles.card}>
      <div className={styles.title}>
        <h3>{repository.name}</h3>
        <span>{repository.visibility}</span>
      </div>
      <div className={styles.info}>
        <div className={styles.technology}>
          <p>{repository.technology}</p>
          <span>
            <img src="/dot.png" alt="dot" />
          </span>
        </div>
        <div className={styles.db}>
          <span>
            <img src="/database.png" alt="database" />
          </span>
          <p>{repository.size_kb} KB</p>
        </div>
        <p>Updated {repository.updated}</p>
      </div>
    </li>
  );
}

export default RepositoryCard;
