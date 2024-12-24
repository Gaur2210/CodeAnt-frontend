import styles from "./Dashboard.module.css";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Hamburger from "../dashboard/components/Hamburger";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Hamburger />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
