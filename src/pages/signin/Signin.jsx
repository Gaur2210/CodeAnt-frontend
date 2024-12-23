import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import styles from "./Signin.module.css";

function Signin() {
  return (
    <div className={styles.signinContainer}>
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default Signin;
