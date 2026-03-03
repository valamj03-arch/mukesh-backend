const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname)));

// Contact API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Message:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.json({ success: true });
});

// Root check
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running 🚀");
});
