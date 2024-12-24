import Navbar from "./components/Navbar";
import Search from "./components/Search";
import styles from "./Repositories.module.css";
import RepositoryList from "./components/RepositoryList";
import { useState } from "react";

function Content() {
  const [query, setQuery] = useState("");

  function handleSearchChange(event) {
    setQuery(event.target.value);
  }

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.stick}>
          <Navbar />
          <Search onSearch={handleSearchChange} query={query}/>
        </div>
        <RepositoryList query={query}/>
      </div>
    </div>
  );
}

export default Content;
