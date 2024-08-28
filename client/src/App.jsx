import styles from "./index.module.css";
import sqlLogo from "./assets/sql-logo.png";

function App() {
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="sql-logo" className={styles.icon} />
      <h3>Generate SQL with AI</h3>

      <form>
        <input
          type="text"
          name="quesy-description"
          placeholder="Describe your query"
        />
        
      </form>
    </main>
  );
}

export default App;
