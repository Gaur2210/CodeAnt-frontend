import styles from "./SelfHosted.module.css";

function SelfHosted() {
  return (
    <div className={styles.bottomContainer}>
      <button>
        <img src="/gitlab.png" alt="gitlab" />
        <p>Self Hosted Gitlab</p>
      </button>
      <button>
        <img src="/sso.png" alt="sso" />
        <p>Sign in with SSO</p>
      </button>
    </div>
  );
}

export default SelfHosted;
