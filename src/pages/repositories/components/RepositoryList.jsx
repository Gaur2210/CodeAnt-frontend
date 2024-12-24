import { useEffect, useState } from "react";
import data from "../../../../data/repositories.json";
import RepositoryCard from "./RepositoryCard";
import styles from "./RepositoryList.module.css";

function RepositoryList({ query }) {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(
    function () {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = data.filter((repository) =>
        repository.name.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredData((filteredData) => filtered);
    },
    [query]
  );

  return (
    <ul className={styles.list}>
      {filteredData.length > 0 &&
        filteredData.map((repository, index) => (
          <RepositoryCard key={index} repository={repository} />
        ))}
      {filteredData.length === 0 && <p style={{ padding: "2rem" }}>No results found</p>}
    </ul>
  );
}

export default RepositoryList;
