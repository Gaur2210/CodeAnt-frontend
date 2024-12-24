import styles from "./Dashboard.module.css";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
