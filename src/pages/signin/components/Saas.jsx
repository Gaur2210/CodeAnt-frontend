import styles from "./Saas.module.css";

function Saas() {
  return (
    <div className={styles.bottomContainer}>
      <button>
        <img src="/github.png" alt="github" />
        <p>Sign in with Github</p>
      </button>
      <button>
        <img src="/bitbucket.png" alt="bitbucket" />
        <p>Sign in with BitBucket</p>
      </button>
      <button>
        <img src="/azure.png" alt="azure" />
        <p>Sign in with Azure Devops</p>
      </button>
      <button>
        <img src="/gitlab.png" alt="gitlab" />
        <p>Sign in with Gitlab</p>
      </button>
    </div>
  );
}

export default Saas;
