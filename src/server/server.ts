import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 MCP Server is alive and running on Render!");
});

app.post("/ask", (req, res) => {
  const { name } = req.body;
  res.json({
    message: `Hello ${name || "friend"} 👋 from your MCP server!`,
  });
});

app.listen(PORT, () => {
  console.log(`✅ MCP server running on port ${PORT}`);
});
