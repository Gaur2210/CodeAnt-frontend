import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.search}>
      <img src="/search.png" alt="search" />
      <input type="text" placeholder="Search Repositories"></input>
    </div>
  );
}

export default Search;
