import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 MCP Server is running!");
});

// Example MCP-style endpoint
app.post("/ask", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello ${name || "world"} 👋 from your MCP server!` });
});

app.listen(PORT, () => {
  console.log(`✅ MCP server live on port ${PORT}`);
});
