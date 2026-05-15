const express = require('express');
const cors = require('cors'); // Essential for Full-Stack communication
const app = express();
const port = 3000;

app.use(cors()); // This allows your HTML file to "talk" to this server

// The "Home" Route
app.get('/', (req, res) => {
  res.send('<h1>Portfolio Backend is Live!</h1>');
});

// The "API" Route - Pulling data from your CV [cite: 1, 2, 3]
app.get('/api/info', (req, res) => {
  res.json({
    name: "Syed Raza",
    role: "Associate DevOps Engineer",
    experience: "1+ year",
    skills: ["AWS", "Azure", "Docker", "Nginx", "Prometheus"],
    contact: "ashalshah897@gmail.com"
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
