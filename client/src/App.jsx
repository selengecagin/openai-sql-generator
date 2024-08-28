import styles from "./index.module.css";
import sqlLogo from "./assets/sql-logo.png";

function App() {
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="sql-logo" className={styles.icon} />
    </main>
  );
}

export default App;
