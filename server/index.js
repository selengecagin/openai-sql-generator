import express from "express";
import cors from "cors";

const app = express();

// whitelist for the API
app.use(cors());

const port = process.env.PORT || 3005;

// create endpoints
app.get("/", (req, res) => {
  res.json({ status: "operational", message: "API is up and running" });
});

app.post("/generate", (req, res) => {
  const queryDescription = req.body.queryDescription;
  console.log("received description: ", queryDescription);
  res.json({ response: `you sent this: ${queryDescription}` });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
