import express from "express";
import cors from "cors";
import generate from "./generate.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3005;

// create endpoints
app.get("/", (req, res) => {
  res.json({ status: "operational", message: "API is up and running" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// route to handle post requests
app.post("/generate", async (req, res) => {
  const { queryDescription } = req.body;
  try {
    const sqlQuery = await generate(queryDescription);
    res.json({ sqlQuery });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
