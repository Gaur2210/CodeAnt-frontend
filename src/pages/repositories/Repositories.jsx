import Navbar from "./components/Navbar";
import Search from "./components/Search";
import styles from "./Repositories.module.css";
import RepositoryList from "./components/RepositoryList";

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.stick}>
          <Navbar />
          <Search />
        </div>
        <RepositoryList />
      </div>
    </div>
  );
}

export default Content;
