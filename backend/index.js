const express = require('express');
const app = express();
const { execSync } = require('child_process');

// Middleware or Routes
app.get('/', (req, res) => {
  res.send('Port 5000 is reserved for Current Glimpse backend!');
});

// Function to Kill Conflicting Process
const killProcessUsingPort = (port) => {
  try {
    const pid = execSync(`lsof -t -i:${port}`).toString().trim();
    if (pid) {
      console.log(`Killing process on port ${port}: PID ${pid}`);
      execSync(`kill -9 ${pid}`);
    }
  } catch (err) {
    console.log(`No process found on port ${port}`);
  }
};

// Port Configuration
const PORT = process.env.PORT || 5000;

// Attempt to Free Port and Start Server
killProcessUsingPort(PORT);
app.listen(PORT, () => {
  console.log(`Server is running and reserving port ${PORT}`);
});