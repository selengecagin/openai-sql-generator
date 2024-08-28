import express from "express";
import cors from "cors";

const app = express();

// whitelist for the API
app.use(cors());

const port = process.env.PORT || 3005;

// create endpoints
app.get("/",(req,res)=>{
    res.json({ status: "operational", message: "API is up and running" });
})