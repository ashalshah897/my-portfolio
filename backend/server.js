const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

// Step 1: Enable CORS so your frontend can talk to this backend safely
app.use(cors());

// Step 2: The Home Route (Testing endpoint)
app.get('/', (req, res) => {
  res.send('<h1>Syed Raza Portfolio API is running!</h1>');
});

// Step 3: The API Route containing your complete CV data
app.get('/api/info', (req, res) => {
  res.json({
    name: "Syed Raza",
    role: "Associate DevOps Engineer",
    location: "Lahore, Pakistan",
    email: "ashalshah897@gmail.com",
    summary: "DevOps Engineer with 1+ year of hands-on experience in AWS and Azure, specializing in Docker-based deployments and Linux environments.",
    skills: [
      "AWS", "Azure", "Docker", "Docker Compose", 
      "Linux (Ubuntu)", "Nginx", "Prometheus", 
      "Grafana", "Git & GitHub", "Terraform", "Kubernetes"
    ],
    projects: [
      "Built and maintained basic CI/CD pipelines using GitHub Actions / Jenkins at VectraStack.",
      "Configured Nginx as a reverse proxy for application deployments.",
      "Built and configured Dockerfiles and Docker Compose for AslasChat.ai frontend and backend services.",
      "Pulled and configured PostgreSQL and Redis containers, establishing smooth database connectivity.",
      "Monitored systems and visualized metrics using Prometheus, Grafana, and Node Exporter."
    ]
  });
});

// Step 4: Start the server on port 3000
app.listen(port, () => {
  console.log(`Backend server is spinning on http://localhost:${port}`);
});
