import data from "../../../../data/repositories.json";
import RepositoryCard from "./RepositoryCard";
import styles from "./RepositoryList.module.css"

function RepositoryList() {
  return (
    <ul className={styles.list}>
      {data.map((repository, index) => (
        <RepositoryCard key={index} repository={repository} />
      ))}
    </ul>
  );
}

export default RepositoryList;
