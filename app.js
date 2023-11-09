// Importing the Express and creating its Instance
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

import dotenv from "dotenv";
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Importing the Body Parser
app.use(express.json());

// Importing the Database Connection
import dbConnection from "./db/config.js";
dbConnection();

// Importing the Routes
import urlRoutes from "./routes/urlRoute.js";
app.use("/url", urlRoutes);

// dotenv
dotenv.config();

// Serve static files from the 'views' directory
// app.use("/", express.static(__dirname + "/view"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
  return;
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
