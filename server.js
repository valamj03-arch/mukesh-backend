const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(__dirname));

// Contact API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);
  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running 🚀");
});
