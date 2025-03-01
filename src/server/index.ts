import express from "express";
import dotenv from "dotenv";
import { WebSocketServer } from "ws";
import cron from "node-cron";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api", (req, res) =>
  res.json({ message: "Dark Web OSINT API Running" }),
);

const server = app.listen(PORT, () =>
  console.log(`API running on port ${PORT}`),
);

// WebSocket setup
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.on("message", (message) => console.log(`Received: ${message}`));
  ws.send("Welcome to Dark Web OSINT Dashboard");
});

// Example cron job
cron.schedule("0 * * * *", () => {
  console.log("Running a job at the start of every hour");
  // Add your data fetching logic here
});
