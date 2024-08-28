import styles from "./index.module.css";
import sqlLogo from "./assets/sql-logo.png";
import { useState } from "react";

function App() {
  //queryDescription = input = user prompt
  const [queryDescription, setQueryDescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const query = await generateQuery();
    setSqlQuery(query);
  };

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3002/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: userPrompt }),
    });
    const data = await response.json();
    return data.sqlQuery.trim();
  };

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="sql-logo" className={styles.icon} />
      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="quesy-description"
          placeholder="Describe your query"
          onChange={(e) => {
            setQueryDescription(e.target.value);
          }}
        />
        <input type="submit" value="Generate" />
      </form>
    </main>
  );
}

export default App;
