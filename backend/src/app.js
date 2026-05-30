const express = require("express");
const cors = require("cors");

const client = require("prom-client");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");

const app = express();
const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "TaskFlow DevOps API is running",
  });
});
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);

  res.end(await client.register.metrics());
});

module.exports = app;
