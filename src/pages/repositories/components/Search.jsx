import styles from "./Search.module.css";

function Search({ query, onSearch }) {
  
  return (
    <div className={styles.search}>
      <img src="/search.png" alt="search" />
      <input
        type="text"
        placeholder="Search Repositories"
        value={query}
        onChange={onSearch}
      ></input>
    </div>
  );
}

export default Search;
