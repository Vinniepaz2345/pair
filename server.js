const express = require('express');
const path = require('path');
const pairRoute = require('./src/pair');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS) from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Use /pair endpoint for generating pairing code
app.use('/pair', pairRoute);

// Serve index.html for root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
