import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// whitelist for the API
app.use(cors());

const port = process.env.PORT || 3005;

// create endpoints
app.get("/", (req, res) => {
  res.json({ status: "operational", message: "API is up and running" });
});

// route to handle post requests
app.post("/generate", (req, res) => {
  const queryDescription = req.body.queryDescription; // set up on the frontend
  console.log("Received description: ", queryDescription); // log on the backend
  res.json({ response: `You sent this: ${queryDescription}` });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
